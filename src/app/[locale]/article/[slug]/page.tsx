import { notFound } from 'next/navigation';

import Image from 'next/image';
import BackHomeLinkButton from '@/app/components/backHomeLinkButton';
import articles from '../../../../../data/articles.json';
import { ArticlePageParams, ArticleT } from '../../../types';
import translations from '@/app/translations';

import styles from "../../../page.module.css";

export default async function Article({ params }: ArticlePageParams) {
  const { locale, slug } = await params;

  const articlesByLocale = articles[locale];
  const article: ArticleT | undefined = articlesByLocale.find((article) => (article.slug === slug));

  if (article === undefined) {
    notFound();
  }

  const { title, subTitle, image, content } = article;
  const linkToHomePageText = translations.articlePage.navigation.goHomeLinkText[locale];
  const linkToHomePage = `/${locale}`;

  return (
    <main>
      <header>
        <nav>
          <BackHomeLinkButton
            backHomeLink={linkToHomePage}
            backHomeLinkText={linkToHomePageText}
          />
        </nav>
      </header>
      <article>
        <div className={styles.page} >
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