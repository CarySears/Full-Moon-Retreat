import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reconnecting to You: A Full Moon Retreat",
  description: "A 4-hour Full Moon retreat to help you regulate your nervous system, clear emotional weight, and reconnect with your inner clarity — guided by Anna Brooke.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
