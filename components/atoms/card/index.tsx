import { VFC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './card.module.scss';

type Props = {
  imageUrl: string;
};

const Card: VFC<Props> = ({ imageUrl }) => {
  const squareValue = 250;
  return (
    <div className={style.container}>
      <Link
        passHref
        href={{
          pathname: '/detail',
          query: {
            imageUrl: imageUrl,
          },
        }}
      >
        <Image
          src={imageUrl}
          width={squareValue}
          height={squareValue}
          alt='work image'
        />
      </Link>
      <div className={style.work_title}>Work Title</div>
    </div>
  );
};

export default Card;
