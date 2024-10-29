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