import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { seoData } from "../data/seoData";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'], //  helps to optimize font loading by including only the necessary character sets (latin chars for english)
  display: 'swap', // initially render text with a fallback font and then switch to the custom font once it has loaded
});

export const metadata: Metadata = {
  title: `${seoData.index_title}`,
  description: `${seoData.index_des}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${poppins.className} flex flex-col justify-between bgMain`}>
        <Header />
        <div className="flex w-full mx-auto h-[100%]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );

}
