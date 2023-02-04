import "./globals.css";
import { Lato } from "@next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={lato.className}>
      <head />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-4N5XZVX154"
      />

      <Script strategy="afterInteractive">
        {`      window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
                gtag('config', 'G-4N5XZVX154');
                `}
      </Script>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
