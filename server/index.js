import "dotenv/config";
import express from "express";
import cors from "cors";
import pg from "pg";

const { Pool } = pg;
const app = express();

const PORT = process.env.PORT || 5174;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(cors());
app.use(express.json());

let pool = null;
if (DATABASE_URL) {
  pool = new Pool({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });
} else {
  console.warn("DATABASE_URL is missing. API will return errors.");
}

app.get("/api/health", async (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/applications", async (req, res) => {
  try {
    if (!pool) {
      return res.status(500).json({ error: "Database not configured." });
    }
    const { firstName, lastName, email, phone, course } = req.body || {};
    if (!firstName || !lastName || !email || !phone || !course) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const query = `
      INSERT INTO applications (first_name, last_name, email, phone, course)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, created_at
    `;
    const values = [firstName, lastName, email, phone, course];
    const { rows } = await pool.query(query, values);
    return res.status(201).json({ ok: true, data: rows[0] });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Failed to save application.",
      detail: err?.message
    });
  }
});

app.get("/api/applications", async (_req, res) => {
  try {
    if (!pool) {
      return res.status(500).json({ error: "Database not configured." });
    }
    const query = `
      SELECT id, first_name, last_name, email, phone, course, created_at
      FROM applications
      ORDER BY created_at DESC
    `;
    const { rows } = await pool.query(query);
    return res.json({ data: rows });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Failed to load applications.",
      detail: err?.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`API server listening on http://127.0.0.1:${PORT}`);
});
