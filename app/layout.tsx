import type { Metadata } from "next";
import Nav from "./components/nav/page";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chloe's Canopy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
