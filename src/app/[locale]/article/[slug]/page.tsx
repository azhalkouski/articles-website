import { notFound } from 'next/navigation';

import Image from 'next/image';
import BackHomeLinkButton from '@/app/components/backHomeLinkButton';
import articlesData from '../../../../../data/articles.json';
import { ArticlesByLocale, ArticlePageParams, ArticleT } from '../../../types';
import translations from '@/app/translations';

import rootPageStyles from "../../../page.module.css";
import articlePageStyle from "./articlePage.module.css";
import { SUPPORTED_LOCALES } from '@/app/constants';

const articles: ArticlesByLocale = articlesData as ArticlesByLocale;

export async function generateStaticParams() {
  const staticParams = SUPPORTED_LOCALES.map((locale) => {
    return articles[locale].map(({ slug }) => ({
      locale: locale,
      slug: slug
    }));
  });

  return staticParams.flat();
}

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
  const articleFooterTitle = `
    ${translations.articlePage.articleFooter.title[locale]}: ...
  `;

  return (
    <main>
      <header className={articlePageStyle.headerWithNav}>
        <nav>
          <BackHomeLinkButton
            backHomeLink={linkToHomePage}
            backHomeLinkText={linkToHomePageText}
          />
        </nav>
      </header>
      <article>
        <div className={rootPageStyles.page} >
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
          <footer className={articlePageStyle.articleFooter}>
            <h4 className={articlePageStyle.articleFooterTitle}>{articleFooterTitle}</h4>
          </footer>
        </div>
      </article>
    </main>
  );
}