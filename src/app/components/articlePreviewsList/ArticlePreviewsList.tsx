import ArticlePreviewLink from './ArticlePreviewLink';
import { ArticleT, Locale } from  '../../types';

interface ArticlesListProps {
  articles: ArticleT[],
  selectedLocale: Locale
}

function ArticlesList({ articles, selectedLocale }: ArticlesListProps) {

  return (
    <div>
      {articles.map((atricle) => (
        <div key={atricle.id}>
          <ArticlePreviewLink article={atricle} selectedLocale={selectedLocale} />
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
