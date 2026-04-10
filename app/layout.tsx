import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reconnecting to You: A Full Moon Retreat",
  description:
    "A live online Full Moon retreat to regulate your nervous system, clear emotional weight, and reconnect with your inner clarity.",
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
