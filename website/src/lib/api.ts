// src/lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // http://localhost:5000
  withCredentials: false, // set true kalau pakai cookie session
});

export default api;
