import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "Site GoodLife",
  description: "La vente en ligne des vêtements et des accessoires",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Hero/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
