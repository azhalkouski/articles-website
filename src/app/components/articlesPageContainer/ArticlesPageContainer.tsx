import { notFound } from 'next/navigation';

import ArticlePreviewsList from '../articlePreviewsList';
import LocaleSelector from '../LocaleSelector';
import articles from '../../../../data/articles.json';

import { ArticlesHomepageParams, Locale } from '../../types';
import translations from '../../translations';
import { SUPPORTED_LOCALES } from '../../constants';

import rootPageStyles from "../../page.module.css";
import articlesPageStyles from './articlesPageContainer.module.css';


export default async function articlesPageContainer({
  params,
}: ArticlesHomepageParams) {
  // after version 15, params is an async api and it needs to be awaited
  const { locale: localeParam } = await params;
  const selectedLocale = localeParam;

  if (!SUPPORTED_LOCALES.includes(selectedLocale)) {
    notFound();
  }

  const headerTitle = translations.articlesPage.header[selectedLocale];
  const footerTitle = translations.articlesPage.footer[selectedLocale];

  const localizedArticles = articles[selectedLocale as Locale] || [];

  return (
    <div className={rootPageStyles.page}>
      <header>
        <div className={articlesPageStyles.localeSelectorContainer}>
          <LocaleSelector currentLocale={selectedLocale} />
        </div>
        < h1>{headerTitle}</h1>
      </header>
      <main className={rootPageStyles.main}>
        <ArticlePreviewsList
          articles={localizedArticles}
          selectedLocale={selectedLocale}
        />
      </main>
      <footer className={rootPageStyles.footer}>
       {footerTitle}
      </footer>
    </div>
  );
}
