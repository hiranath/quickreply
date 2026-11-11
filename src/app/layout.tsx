import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quick Reply | Business Communication Assistant",
  description:
    "Create professional business replies faster with Quick Reply AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
