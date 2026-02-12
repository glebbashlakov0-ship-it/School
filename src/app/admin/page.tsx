"use client";

import dynamic from "next/dynamic";

const AdminPage = dynamic(() => import("../../screens/AdminPage"), {
  ssr: false
});

export default function Page() {
  return <AdminPage />;
}
