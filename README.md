# Crypto School

React + Vite landing site for the Crypto School application flow.

## Setup
1. Install dependencies.
2. Copy `.env.example` to `.env` and fill in Neon connection string and admin credentials.
3. Run the dev server with `npm run dev`.

## Supabase
Create a table called `applications` with columns:
- `id` (uuid, primary key, default `gen_random_uuid()`)
- `first_name` (text)
- `last_name` (text)
- `email` (text)
- `phone` (text)
- `course` (text)
- `created_at` (timestamp with time zone, default `now()`)

SQL:
```
create extension if not exists "pgcrypto";
create table if not exists applications (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  course text not null,
  created_at timestamptz not null default now()
);
```

## Deployment
Deploy the frontend on Vercel or Netlify and set the same environment variables.
