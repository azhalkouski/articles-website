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

// ! TODO: rename to ArticlesHomepageParams
export type ArticlesPageDynamicParams = {
  params: {
    locale: Locale
  }
};

export type ArticleT = {
  id: number;
  title: string;
  subTitle: string;
  slug: string;
  content: string;
  imageURL?: string;
  image: ArticleImage
}

export type ArticlePageParams = {
  params: {
    locale: Locale;
    slug: string;
  }
}