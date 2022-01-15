import { VFC } from 'react';
import { Article as ArticleBlock } from './../../components/atoms/article';
import style from './article.module.scss';

const Article: VFC = () => {
  // const debug = 'debug';
  return (
    <div className={style.container}>
      <section className={style.title}>
        {/* <h1>{debug} article page</h1> */}
      </section>
      <section className={style.article_container}>
        <ArticleBlock />
      </section>
    </div>
  );
};

export default Article;
