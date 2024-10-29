import type { Metadata } from "next";
import "../../../globals.css";

export const metadata: Metadata = {
  title: "Article", // ! TODO: do something about these titles
  description: "This is an article about something you might be interested in.",
};

export default function RootLayout({
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
