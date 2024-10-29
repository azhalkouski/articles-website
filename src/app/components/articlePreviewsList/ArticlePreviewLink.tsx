import Link from 'next/link';

import { ArticleT } from "@/app/types";

import styles from './articlePreviewLink.module.css';

interface ArticlePreviewLinkProps {
  article: ArticleT
}

function ArticlePreviewLink({ article }: ArticlePreviewLinkProps) {

  return (
    <div>
      <Link href={article.slug}>
        <h2 className={styles.previewTitle}>{article.title}</h2>
      </Link>
    </div>
  );
};

export default ArticlePreviewLink;
