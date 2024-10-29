import type { Metadata } from "next";
import "../../../globals.css";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = await params;

  return {
    title: `Article: ${slug}`,
    description: `Read the article about "${slug}"`,
  };
}

export default function ArticlePageLayout({
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
