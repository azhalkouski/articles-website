import { redirect } from 'next/navigation';

import { DEFAULT_LOCALE } from './constants';
import { ArticlesHomepageParams } from './types';


export default async function Home({ params }: ArticlesHomepageParams) {
  const { locale } = params;

  if (locale === undefined) {
    redirect(`/${DEFAULT_LOCALE}`);
  }

  return null;
}