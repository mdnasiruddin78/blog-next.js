import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AuthProvider } from "./AuthProvider";
import NavbarServer from "@/fatching/NavbarServer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog Post Next.js",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en" data-theme="light">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <nav className="bg-green-500">
            <ul className="flex justify-between py-3 gap-4 w-11/12 mx-auto">
              <div className="flex gap-3">
                <li><Link href="/" className="font-semibold">Home</Link></li>
                <li><Link href="/profile" className="font-semibold">Profile</Link></li>
              </div>
              <div>
                <NavbarServer></NavbarServer>
              </div>
            </ul>
          </nav>
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
