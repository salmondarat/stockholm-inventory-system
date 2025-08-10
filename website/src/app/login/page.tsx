// src/app/login/page.tsx
'use client';

import React, { useState } from 'react';
import api from '@/lib/api';
import { saveToken } from '@/lib/auth';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setU] = useState('');
  const [password, setP] = useState('');
  const [error, setErr] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr('');
    try {
      const res = await api.post('/login', { username, password });
      saveToken(res.data.token);
      window.location.href = '/dashboard'; // redirect sederhana
    } catch (err: unknown) {
      const errorMsg =
        err &&
        typeof err === 'object' &&
        'response' in err &&
        err.response &&
        typeof err.response === 'object' &&
        'data' in err.response &&
        err.response.data &&
        typeof err.response.data === 'object' &&
        'error' in err.response.data
          ? String(err.response.data.error)
          : 'Login failed';
      setErr(errorMsg);
    }
  }

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && <div className="mb-3 text-red-600">{error}</div>}
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          className="w-full border rounded p-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setU(e.target.value)}
        />
        <input
          className="w-full border rounded p-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setP(e.target.value)}
        />
        <button className="w-full bg-blue-600 text-white rounded p-2">
          Sign in
        </button>
      </form>
      <p className="mt-4 text-sm">
        No account?{' '}
        <Link href="/register" className="text-blue-600 underline">
          Register
        </Link>
      </p>
    </main>
  );
}
