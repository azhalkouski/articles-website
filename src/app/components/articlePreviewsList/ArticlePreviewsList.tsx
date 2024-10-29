import ArticlePreviewLink from './ArticlePreviewLink';
import { ArticleT, Locale } from  '../../types';

interface ArticlesListProps {
  articles: ArticleT[],
  selectedLocale: Locale
}

function ArticlesList({ articles, selectedLocale }: ArticlesListProps) {

  const composeArticleHref = (slug: string) => (
    `${selectedLocale}/article/${slug}`
  );

  return (
    <div>
      {articles.map((atricle) => (
        <div key={atricle.id}>
          <ArticlePreviewLink
            article={atricle}
            articleHref={composeArticleHref(atricle.slug)}
          />
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
