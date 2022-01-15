import { VFC } from 'react';
import style from './article.module.scss';

export const Article: VFC = () => {
  const debug = 'debug';
  return (
    <div className={style.container}>
      <h1 className={style.title}>title of article block</h1>
      <section className={style.body}>
        {debug} article block article block article block article block article
        block article block article block article block article block article
        block article block article block article block article block article
        block article block article block article block article block article
        block article block article block article block article block article
        block article block article block article block article block article
        block article block article block article block article block article
        block article block article block article block article block article
        block article block article block article block article block article
        block article block article block article block article block
      </section>
    </div>
  );
};
