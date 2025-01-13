import type { Metadata } from "next";
import { Lato } from 'next/font/google'
import Nav from "./components/nav/page";
import "./globals.css";

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],  // Add the weights you need
})


export const metadata: Metadata = {
  title: "Chloe's Canopy",
  description: "",
  icons: {
    icon: '/tree.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.className}>
      <body
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
