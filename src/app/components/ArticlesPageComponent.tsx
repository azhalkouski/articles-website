import { notFound } from 'next/navigation';

import LocaleSelector from './LocaleSelector';
import articles from '../../../data/articles.json';

import { ArticlesPageDynamicParams, Locale } from '../types';
import translations from '../translations';
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '../constants';

import styles from "../page.module.css";




export default async function ArticlesPageComponent({
  params,
}: ArticlesPageDynamicParams) {
  // after version 15, params is an async api and it needs to be awaited
  const { locale: localeParam } = await params;
  const selectedLocale = localeParam || DEFAULT_LOCALE;

  if (!SUPPORTED_LOCALES.includes(selectedLocale)) {
    notFound();
  }

  const headerTitle = translations.articlesPage.header[selectedLocale];

  const localizedArticles = articles[selectedLocale as Locale] || [];

  console.log('selectedLocale', selectedLocale);

  return (
    <div className={styles.page}>
      <header>
        <header>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
            <LocaleSelector currentLocale={selectedLocale} />
          </div>
        </header>
        < h1>{headerTitle}</h1>
      </header>
      <main className={styles.main}>
        <div>
          {localizedArticles.map((atricle) => (
            <div key={atricle.id}>
              <h2>{atricle.title}</h2>
            </div>
          ))}
        </div>
      </main>
      <footer className={styles.footer}>
       footer
      </footer>
    </div>
  );
}
