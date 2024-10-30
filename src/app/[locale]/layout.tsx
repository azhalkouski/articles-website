import type { Metadata } from "next";
import "../globals.css";
import { Locale } from "../types";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
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
    <>
      {children}
    </>
  );
}
