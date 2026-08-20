import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abigail Perkasa | IT & Data",
  description: "Personal website of Abigail Perkasa. Informatics graduate with experience in IT support, data management, and web-based information systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
