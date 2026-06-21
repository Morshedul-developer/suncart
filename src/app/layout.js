import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const InterFont = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "SunCart",
  description: "SunCart",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${InterFont.className} h-full antialiased`}
    >
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
