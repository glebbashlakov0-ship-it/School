import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const ApplyPage = lazy(() => import("./pages/ApplyPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export default function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="mx-auto flex min-h-[60vh] max-w-5xl items-center justify-center text-white/70">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
