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
    const { firstName, lastName, email, phone, course, exchanges, wallets } =
      body || {};

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !course ||
      !Array.isArray(exchanges) ||
      !Array.isArray(wallets)
    ) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const db = getPool();
    const query = `
      INSERT INTO applications (first_name, last_name, email, phone, course, exchanges, wallets)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, created_at
    `;
    const values = [firstName, lastName, email, phone, course, exchanges, wallets];
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
      SELECT id, first_name, last_name, email, phone, course, exchanges, wallets, created_at
      FROM applications
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
