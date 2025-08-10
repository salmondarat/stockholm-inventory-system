// src/app/dashboard/page.tsx
"use client";

import { useEffect } from "react";
import { getToken } from "@/lib/auth";

export default function DashboardPage() {
  useEffect(() => {
    if (!getToken()) window.location.href = "/login";
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome!</p>
    </main>
  );
}
