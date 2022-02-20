import { VFC } from 'react';
import style from './logo.module.scss';
import Image from 'next/image';
import { commonImagePath } from '../../../data/data';

const Logo: VFC = () => {
  const imageUrl = 'sample_tippman_logo.png';
  const imageWidth = '147px';
  const imageHeight = '30px';
  return (
    <div className={style.container}>
      <div className={style.logo_area}>
        <Image
          src={commonImagePath + imageUrl}
          width={imageWidth}
          height={imageHeight}
          alt='studio image'
        />
      </div>
    </div>
  );
};

export default Logo;
