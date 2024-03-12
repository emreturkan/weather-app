import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/provider/themeNextProvider";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}, !my-0 container !mx-auto flex min-h-screen flex-col  antialiased selection:bg-black selection:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
