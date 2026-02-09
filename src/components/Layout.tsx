import { PropsWithChildren } from "react";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col text-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
