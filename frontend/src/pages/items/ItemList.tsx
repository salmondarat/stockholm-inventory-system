import React, { useState } from "react";
import { useItems, Item } from "../../hooks/useItems";
import ItemForm from "./ItemForm";
import ItemEditForm from "./ItemEditForm";
import Alert from "../../components/Alert";

type Props = {
  token: string;
  user: { id: number; username: string; role: string };
};

const ItemList: React.FC<Props> = ({ token, user }) => {
  const { items, loading, error, setItems } = useItems(token);

  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  // Unique location options
  const uniqueLocations = Array.from(
    new Set(items.map((item) => item.location))
  ).filter(Boolean);

  // Handlers
  const handleItemAdded = (item: Item) => {
    setItems((prev) => [item, ...prev]);
  };

  const handleItemUpdated = (updated: Item) => {
    setItems((prev) =>
      prev.map((item) => (item.id === updated.id ? updated : item))
    );
    setEditingItem(null);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure want to delete this item?")) return;
    try {
      const res = await fetch(`http://localhost:5000/items/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      if (!res.ok) throw new Error("Failed to delete item");
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err: any) {
      alert(err.message || "Failed to delete item");
    }
  };

  // Search & filter logic
  const filteredItems = items.filter(
    (item) =>
      (item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description?.toLowerCase().includes(search.toLowerCase()) ||
        item.location?.toLowerCase().includes(search.toLowerCase())) &&
      (!locationFilter || item.location === locationFilter)
  );

  return (
    <div className="max-w-4xl mx-auto my-8 bg-white rounded-xl shadow-lg p-6">
      {/* Header & search/filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
        <h2 className="text-2xl font-bold text-blue-700">Inventory Items</h2>
        <div className="flex gap-2">
          <input
            className="border rounded px-3 py-1 w-48"
            type="text"
            placeholder="Search item..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="border rounded px-3 py-1"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="">All Locations</option>
            {uniqueLocations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Form tambah item */}
      <ItemForm token={token} onItemAdded={handleItemAdded} />
      {loading && <p className="my-4 text-gray-500">Loading...</p>}
      {error && <Alert type="error">{error}</Alert>}
      {!loading && !error && filteredItems.length === 0 && (
        <p>No items found.</p>
      )}
      {filteredItems.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-blue-200">
                <th className="py-3 px-5">Name</th>
                <th className="py-3 px-5">Description</th>
                <th className="py-3 px-5">Quantity</th>
                <th className="py-3 px-5">Location</th>
                <th className="py-3 px-5">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr
                  key={item.id}
                  className="odd:bg-blue-50 even:bg-white border-b"
                >
                  {editingItem?.id === item.id ? (
                    <td colSpan={5}>
                      <ItemEditForm
                        token={token}
                        item={item}
                        onCancel={() => setEditingItem(null)}
                        onUpdated={handleItemUpdated}
                      />
                    </td>
                  ) : (
                    <>
                      <td className="py-2 px-4">{item.name}</td>
                      <td className="py-2 px-4">{item.description}</td>
                      <td className="py-2 px-4">{item.quantity}</td>
                      <td className="py-2 px-4">{item.location}</td>
                      <td className="py-2 px-4 flex gap-2">
                        <button
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                          onClick={() => setEditingItem(item)}
                        >
                          Edit
                        </button>
                        {user?.role === "admin" && (
                          <button
                            className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </button>
                        )}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ItemList;
