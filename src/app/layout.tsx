import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sarah's oldies",
  description: "Voor als u een mooie amerikaanse auto wilt huren!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed items-center flex bg-primary min-h-24 w-full shadow-lg z-10 px-8 ">
          <h3 className="flex-auto">Sarah&apos;s oldies</h3>
          <div className="hidden flex-none lg:grid grid-cols-5 gap-4 items-center">
            <Link href="#OverMij" className=" text-xl font-bold">
              Over mij
            </Link>
            <Link href="#MijnAuto" className=" text-xl font-bold">
              Mijn auto
            </Link>
            <Link
              href="#Contact"
              className=" text-xl font-bold bg-background rounded-xl border-2 py-2 px-8 shadow-md col-start-4 col-end-6"
            >
              Neem contact
            </Link>
          </div>
        </nav>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
