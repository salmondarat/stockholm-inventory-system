// src/lib/authFetch.ts
import api from "./api";
import { getToken } from "./auth";

export function authHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function getItems() {
  const res = await api.get("/items", { headers: authHeaders() });
  return res.data;
}
export async function createItem(payload: any) {
  const res = await api.post("/items", payload, { headers: authHeaders() });
  return res.data;
}
export async function updateItem(id: number, payload: any) {
  const res = await api.put(`/items/${id}`, payload, {
    headers: authHeaders(),
  });
  return res.data;
}
export async function deleteItem(id: number) {
  const res = await api.delete(`/items/${id}`, { headers: authHeaders() });
  return res.data;
}
