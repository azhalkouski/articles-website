import { redirect } from 'next/navigation';

import { DEFAULT_LOCALE } from './constants';
import { ArticlesPageDynamicParams } from './types';


export default async function Home({ params }: ArticlesPageDynamicParams) {
  const { locale } = params;

  if (locale === undefined) {
    redirect(`/${DEFAULT_LOCALE}`);
  }

  return null;
}