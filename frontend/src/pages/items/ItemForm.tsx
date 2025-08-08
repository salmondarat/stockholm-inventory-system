import React, { useState } from "react";
import { Item } from "../../hooks/useItems";
import Alert from "../../components/Alert"; // ⬅️ Import Alert

type Props = {
  token: string;
  onItemAdded: (item: Item) => void;
};

const ItemForm: React.FC<Props> = ({ token, onItemAdded }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState<number>(1);
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // ⬅️ State untuk pesan sukses

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({ name, description, quantity, location }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to add item");
      onItemAdded(data);
      setSuccess("Item added successfully!"); // ⬅️ Tampilkan pesan sukses
      setName("");
      setDescription("");
      setQuantity(1);
      setLocation("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow mb-6 max-w-xl mx-auto"
    >
      <h3 className="text-lg font-bold mb-2 text-blue-700">Add New Item</h3>
      {error && <Alert type="error">{error}</Alert>} {/* ⬅️ Error */}
      {success && <Alert type="success">{success}</Alert>} {/* ⬅️ Sukses */}
      <div className="flex flex-col gap-2">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="border p-2 rounded"
          type="number"
          min={1}
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          required
        />
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white rounded py-2 font-semibold mt-2 hover:bg-blue-700"
          type="submit"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Item"}
        </button>
      </div>
    </form>
  );
};

export default ItemForm;
