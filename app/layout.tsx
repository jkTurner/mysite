import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'], // Adjust subsets as needed
  display: 'swap', // Optional but recommended for better performance
});

export const metadata: Metadata = {
  title: "Jakkrit Turner's Portfolio",
  description: "Jakkrit Turner's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={`${poppins.className} h-lvh flex flex-col justify-between`}> */}
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
