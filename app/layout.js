import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { NextUIProvider } from "@nextui-org/react";

const alberSans = Albert_Sans({
  subsets: ["latin"],
  weights: [400, 500, 600, 700, 900],
});
export const metadata = {
  title: "Tereminc E-commerce Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alberSans.className}>
        <NextUIProvider>
          <Navbar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
