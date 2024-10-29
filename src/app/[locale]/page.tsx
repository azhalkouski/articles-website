import ArticlesPageComponent from '../components/ArticlesPageComponent';
import { ArticlesPageDynamicParams } from '../types';


export default function Home({ params }: ArticlesPageDynamicParams) {

  return (
    <ArticlesPageComponent params={params} />
  );
}
