import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Locale } from "../types";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: `Tranding articles in  ${locale}`,
    description: `A website serving tranding articles in ${locale}`,
  };
}

export default function LocalizedArticlesPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
