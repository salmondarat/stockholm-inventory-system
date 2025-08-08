import { useEffect, useState } from "react";

export type Item = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  location: string;
  created_at?: string;
  updated_at?: string;
};

export function useItems(token: string) {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    setError(null);
    fetch("http://localhost:5000/items", {
      headers: {
        "Authorization": "Bearer " + token
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch items");
        return res.json();
      })
      .then(data => setItems(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [token]);

  return { items, loading, error, setItems };
}
