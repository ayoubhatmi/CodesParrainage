import "./globals.css";
import { Inter } from "@next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.className}>
      <head />

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
