export type Locale = "en" | "fr";

export enum LocaleEnum {
  EN = "en",
  FR = "fr"
};

export type ArticlesPageDynamicParams = {
  params: {
    locale?: Locale
  }
};

export type ArticleT = {
  id: number;
  title: string;
  subTitle: string;
  slug: string;
  content: string;
  imageURL?: string;
}