import React, { useState } from "react";
import Login from "./pages/auth/Login";
import ItemList from "./pages/items/ItemList";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const handleLogin = (token: string, user: any) => {
    setToken(token);
    setUser(user);
  };

  const handleLogout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
        <Login onLogin={handleLogin} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-50">
      {/* Navbar */}
      <nav className="w-full bg-blue-700 text-white py-4 px-8 flex justify-between items-center shadow-md">
        <span className="font-bold text-xl tracking-wide">Stockholm IMS</span>
        <span>
          Welcome, <b>{user?.username}</b> ({user?.role})
          <button
            className="ml-6 px-3 py-1 bg-red-500 hover:bg-red-700 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </span>
      </nav>
      {/* Konten utama */}
      <div className="container mx-auto py-12">
        <ItemList token={token} user={user} />
      </div>
    </div>
  );
}

export default App;
