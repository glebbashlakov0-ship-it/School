import "./globals.css";

export const metadata = {
  title: "Nexora Crypto Academy — Free Levels in Trading & Web3",
  description:
    "Crypto School offers five structured levels from beginner to pro. Limited free access slots available. Apply now."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-ink text-white">{children}</body>
    </html>
  );
}
