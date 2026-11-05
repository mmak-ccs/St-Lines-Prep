import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "katex/dist/katex.min.css";
import { Providers } from "@/components/providers";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Equations of Straight Lines",
    template: "%s · S4 Straight Lines",
  },
  description:
    "HKDSE-style multiple-choice practice on equations of straight lines for Secondary 4, with hints and full worked solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Providers>
          <SiteHeader />
          <main className="mx-auto w-full max-w-5xl px-4 pt-6 pb-8 pl-8 sm:pl-12 md:pr-8 md:pl-20">
            {children}
          </main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
