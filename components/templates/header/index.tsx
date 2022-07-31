import { VFC } from 'react';
import style from './header.module.scss';
import Link from 'next/link';

const NOTION_ARTICLE_PAGE =
  'https://forest-pufferfish-25b.notion.site/Article-Page-58eb5cd025ff409aa679db3f2021a8bb';

const Header: VFC = () => {
  const debug = 'Kazuki Endo';
  return (
    <div className={style.container}>
      <span>{debug}</span>
      <div className={style.navigation}>
        <Link passHref href='/'>
          <a className={style.navigation_item}>Work</a>
        </Link>
        <Link passHref href='/about'>
          <a className={style.navigation_item}>About</a>
        </Link>
        <Link passHref href={NOTION_ARTICLE_PAGE}>
          <a
            className={style.navigation_item}
            target='_blank'
            rel='noopener noreferrer'
          >
            Article
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
