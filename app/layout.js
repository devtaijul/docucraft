import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getDocuments } from "@/lib/doc";
import { Header } from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DocuCraft - A documentation website by Protocol",
  description: "A documentation website by Protocol",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocuments();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div class="h-full lg:ml-72 xl:ml-80">
          <Header />
          <div class="relative px-4 pt-14 sm:px-6 lg:px-8">
            <div class="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
              <div class="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
                <div class="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"></div>
              </div>
            </div>
            <main class="flex-auto py-12">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
