import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "Silicønja",
  icons: "/favicon.ico",
  description: "Encyclopedia of Chemical Elements",
  keywords: ["chemistry", "elements", "periodic table", "science"],
  authors: [{ name: "CoderSilicon" }],
  openGraph: {
    title: "Silicønja",
    description: "Encyclopedia of Chemical Elements",
    type: "website",
  },
  verification: {
    google: "NOAPF0IigEsK49O_rSZv9G2yvCRcHe9wPi9fL_j4ing",
  },
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Silicønja",
    url: "https://siliconja.vercel.app/",
  };
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
