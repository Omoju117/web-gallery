import { VFC } from 'react';
import style from './logo.module.scss';

const Logo: VFC = () => {
  const debug = 'Logo';
  return (
    <div className={style.container}>
      <p>{debug}</p>
    </div>
  );
};

export default Logo;
