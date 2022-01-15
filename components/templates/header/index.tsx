import { VFC } from 'react';
import style from './header.module.scss';
import Link from 'next/link';

const Header: VFC = () => {
  const debug = 'Header';
  return (
    <div className={style.container}>
      <span>{debug}</span>
      <div className={style.navigation}>
        <Link passHref href='/work'>
          <a className={style.navigation_item}>Work</a>
        </Link>
        <Link passHref href='/about'>
          <a className={style.navigation_item}>About</a>
        </Link>
        <Link passHref href='/contact'>
          <a className={style.navigation_item}>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
