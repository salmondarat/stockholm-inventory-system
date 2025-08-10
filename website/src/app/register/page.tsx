// src/app/register/page.tsx
'use client';

import React, { useState } from 'react';
import api from '@/lib/api';

export default function RegisterPage() {
  const [username, setU] = useState('');
  const [password, setP] = useState('');
  const [role, setR] = useState('user');
  const [msg, setMsg] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg('');
    try {
      await api.post('/register', { username, password, role });
      setMsg('Registered! You can login now.');
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
          : 'Register failed';
      setMsg(errorMsg);
    }
  }

  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      {msg && <div className="mb-3">{msg}</div>}
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
        <select
          className="w-full border rounded p-2"
          value={role}
          onChange={(e) => setR(e.target.value)}
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
        </select>
        <button className="w-full bg-blue-600 text-white rounded p-2">
          Create account
        </button>
      </form>
    </main>
  );
}
