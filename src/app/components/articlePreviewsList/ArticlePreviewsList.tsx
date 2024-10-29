import ArticlePreviewLink from './ArticlePreviewLink';
import { ArticleT } from  '../../types';

interface ArticlesListProps {
  articles: ArticleT[]
}

function ArticlesList({ articles }: ArticlesListProps) {

  return (
    <div>
      {articles.map((atricle) => (
        <div key={atricle.id}>
          <ArticlePreviewLink article={atricle}/>
        </div>
      ))}
    </div>
  );
};

export default ArticlesList;
