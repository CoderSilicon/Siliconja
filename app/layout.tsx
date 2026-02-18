import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "Silicønja",
  description: "Encyclopedia of Chemical Elements. :D",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
