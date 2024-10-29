import { notFound } from 'next/navigation';

import Image from 'next/image';
import articles from '../../../../../data/articles.json';
import { ArticlePageParams, ArticleT } from '../../../types';

import styles from "../../../page.module.css";

export default async function Article({ params }: ArticlePageParams) {
  const { locale, slug } = await params;

  const articlesByLocale = articles[locale];
  const article: ArticleT | undefined = articlesByLocale.find((article) => (article.slug === slug));

  if (article === undefined) {
    notFound();
  }

  const { title, subTitle, image, content } = article;

  return (
    <main>
      <article>
        <div className={styles.page}>
          <header>
            <h2>{title}</h2>
            <p>{subTitle}</p>
          </header>
          <figure>
            <Image
              src={image.src}
              width={500}
              height={380}
              alt={image.alt}
            />
            <figcaption>{image.storyBehindImage}</figcaption>
          </figure>
          <section>
            <div>{content}</div>
          </section>
          <footer>Related articles: ...</footer>
        </div>
      </article>
    </main>
  );
}