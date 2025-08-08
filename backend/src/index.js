require("dotenv").config();
const express = require("express");
const pool = require("./db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const cors = require("cors");
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

function authorizeRole(roles = []) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ error: "Forbidden: insufficient permissions" });
    }
    next();
  };
}

// ========== AUTH MIDDLEWARE ==========

// Middleware: cek JWT di header Authorization
function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  // Format: Bearer <token>
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user;
    next();
  });
}

// Middleware: hanya admin bisa akses
function requireAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ error: "Only admin can perform this action" });
  }
  next();
}

// ========== AUTH ENDPOINTS ==========

// REGISTER user
app.post("/register", async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const userCheck = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    if (userCheck.rows.length > 0) {
      return res.status(400).json({ error: "Username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING id, username, role, created_at",
      [username, hashedPassword, role || "user"]
    );
    res.status(201).json({ user: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// LOGIN user
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const userRes = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );
    if (userRes.rows.length === 0) {
      return res.status(400).json({ error: "Username/password salah" });
    }
    const user = userRes.rows[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(400).json({ error: "Username/password salah" });
    }
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.json({
      token,
      user: { id: user.id, username: user.username, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ========== PROTECTED CRUD ITEMS (semua harus login, delete harus admin) ==========

// GET all items (login required)
app.get("/items", authenticateToken, async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM items ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET item by id (login required)
app.get("/items/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CREATE item (login required)
app.post("/items", authenticateToken, async (req, res) => {
  try {
    const { name, description, quantity, location } = req.body;
    const result = await pool.query(
      "INSERT INTO items (name, description, quantity, location) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, description, quantity, location]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE item (login required)
app.put("/items/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, quantity, location } = req.body;
    const result = await pool.query(
      `UPDATE items SET 
        name = $1, 
        description = $2, 
        quantity = $3, 
        location = $4, 
        updated_at = CURRENT_TIMESTAMP 
      WHERE id = $5 RETURNING *`,
      [name, description, quantity, location, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE item (login & admin only)
app.delete(
  "/items/:id",
  authenticateToken,
  authorizeRole(["admin"]),
  async (req, res) => {
    try {
      const { id } = req.params;
      const result = await pool.query(
        "DELETE FROM items WHERE id = $1 RETURNING *",
        [id]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ error: "Item not found" });
      }
      res.json({ message: "Item deleted" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Endpoint root (public)
app.get("/", (req, res) => {
  res.send("Stockholm IMS API is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
