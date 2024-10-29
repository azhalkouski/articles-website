import ArticlesPageContainer from '../components/articlesPageContainer';
import { ArticlesHomepageParams } from '../types';


export default function Home({ params }: ArticlesHomepageParams) {

  return (
    <ArticlesPageContainer params={params} />
  );
};
