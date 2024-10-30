export type Locale = "en" | "fr";

export enum LocaleEnum {
  EN = "en",
  FR = "fr"
};

type ArticleImage = {
  src: string;
  alt: string;
  storyBehindImage: string;
}

export type ArticlesHomepageParams = {
  params: Promise<{
    locale: Locale
  }>
};

export type ArticleT = {
  id: number;
  title: string;
  subTitle: string;
  slug: string;
  content: string;
  image: ArticleImage
}

export type ArticlePageParams = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>
}

export interface ArticlesByLocale {
  [locale: string]: ArticleT[];
}
