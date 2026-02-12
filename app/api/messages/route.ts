import { NextResponse } from "next/server";
import pg from "pg";

const { Pool } = pg;

let pool: pg.Pool | null = null;

function getPool() {
  if (pool) return pool;
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is missing.");
  }
  pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false }
  });
  return pool;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body || {};

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const db = getPool();
    const query = `
      INSERT INTO messages (name, email, phone, message)
      VALUES ($1, $2, $3, $4)
      RETURNING id, created_at
    `;
    const values = [name, email, phone, message];
    const { rows } = await db.query(query, values);
    return NextResponse.json({ ok: true, data: rows[0] }, { status: 201 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: "Server error.", detail: err?.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const db = getPool();
    const query = `
      SELECT id, name, email, phone, message, created_at
      FROM messages
      ORDER BY created_at DESC
    `;
    const { rows } = await db.query(query);
    return NextResponse.json({ data: rows });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: "Server error.", detail: err?.message },
      { status: 500 }
    );
  }
}
