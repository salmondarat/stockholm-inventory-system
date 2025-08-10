// src/app/items/page.tsx
"use client";

import { useEffect, useState } from "react";
import { getItems, createItem, deleteItem, updateItem } from "@/lib/authFetch";

export default function ItemsPage() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ name: "", quantity: 0 });

  async function load() {
    setLoading(true);
    try {
      const data = await getItems();
      setItems(data);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    load();
  }, []);

  async function onCreate(e: React.FormEvent) {
    e.preventDefault();
    await createItem(form);
    setForm({ name: "", quantity: 0 });
    load();
  }

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Items</h1>

      <form onSubmit={onCreate} className="flex gap-2">
        <input
          className="border rounded p-2 flex-1"
          placeholder="Item name"
          value={form.name}
          onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
        />
        <input
          type="number"
          className="border rounded p-2 w-36"
          placeholder="Qty"
          value={form.quantity}
          onChange={(e) =>
            setForm((s) => ({ ...s, quantity: Number(e.target.value) }))
          }
        />
        <button className="bg-blue-600 text-white rounded px-4">Add</button>
      </form>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-50">
              <th className="border p-2 text-left">ID</th>
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Qty</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => (
              <tr key={it.id}>
                <td className="border p-2">{it.id}</td>
                <td className="border p-2">{it.name}</td>
                <td className="border p-2">{it.quantity}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => deleteItem(it.id).then(load)}
                    className="text-red-600 underline"
                  >
                    Delete
                  </button>
                  {/* Tambahkan UI edit sesuai kebutuhan (modal/input inline) */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
