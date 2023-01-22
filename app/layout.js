import "./globals.css";
import { Lato } from "@next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={lato.className}>
      <head />

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
