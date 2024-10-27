import { Albert_Sans } from "next/font/google";
import "../globals.css";
import CartItemsContextWrapper from "@/components/context/cartcontext";
import { Toaster } from "sonner";
import Footer from "@/components/footer";

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
      <body className={"bg-white text-black " + alberSans.className}>
        <Toaster />
        <CartItemsContextWrapper>
          {children}
          <Footer />
        </CartItemsContextWrapper>
      </body>
    </html>
  );
}
