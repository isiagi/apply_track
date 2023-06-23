import Nav from "@/components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Job Applys",
  description: "Track your job appliation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#eee]`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
