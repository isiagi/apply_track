import Nav from "@/components/Nav";
import "./globals.css";
import { Roboto } from "next/font/google";

import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { AppContextProvider } from "@/context/app.context";

const inter = Roboto({
  weight: "300",
  subsets: ["latin"],
});

export const metadata = {
  title: "Job Applys",
  description: "Track your job appliation",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body className={`${inter.className}`}>
          <AppContextProvider>
            <Nav />
            <ClerkLoading>
              <div className="flex justify-center items-center h-screen">
                <h3>
                  <em>App is loading...</em>
                </h3>
              </div>
            </ClerkLoading>
            <ClerkLoaded>{children}</ClerkLoaded>
          </AppContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
