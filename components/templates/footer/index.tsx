import { VFC } from 'react';
import style from './footer.module.scss';

const Footer: VFC = () => {
  const debug = '';
  return (
    <div className={style.container}>
      <span>{debug}</span>
    </div>
  );
};

export default Footer;
