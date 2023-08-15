import Nav from "@/components/Nav";
import "./globals.css";
import { Roboto } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/app.context";

const inter = Roboto({ 
  weight: '300',
  subsets: ["latin"]
 });

export const metadata = {
  title: "Job Applys",
  description: "Track your job appliation",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          <AppContextProvider>
            <Nav />
            {children}
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
