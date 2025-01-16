import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSS-Animation",
  description: "애니메이션 연습",
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
