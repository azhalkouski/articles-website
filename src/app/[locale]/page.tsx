import ArticlesPageContainer from '../components/articlesPageContainer';
import { ArticlesHomepageParams } from '../types';

import { SUPPORTED_LOCALES } from '../constants';


export async function generateStaticParams() {
  const staticParams = SUPPORTED_LOCALES.map((locale) => ({
    locale: locale
  }));

  return staticParams;
}


export default function Home({ params }: ArticlesHomepageParams) {

  return (
    <ArticlesPageContainer params={params} />
  );
};
