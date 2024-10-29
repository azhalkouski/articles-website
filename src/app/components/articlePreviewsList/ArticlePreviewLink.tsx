import Link from 'next/link';

import { ArticleT, Locale } from "@/app/types";

import styles from './articlePreviewLink.module.css';

interface ArticlePreviewLinkProps {
  article: ArticleT,
  selectedLocale: Locale
}

function ArticlePreviewLink({ article, selectedLocale }: ArticlePreviewLinkProps) {

  const articleLocalizedSlug = `${selectedLocale}/${article.slug}`;

  return (
    <div>
      <Link href={articleLocalizedSlug}>
        <h2 className={styles.previewTitle}>{article.title}</h2>
      </Link>
    </div>
  );
};

export default ArticlePreviewLink;
