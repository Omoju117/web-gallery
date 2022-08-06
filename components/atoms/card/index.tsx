import { VFC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './card.module.scss';
import { WorkInfo } from '../../../data/data';

type Props = {
  workInfo: WorkInfo;
};

const Card: VFC<Props> = ({ workInfo }) => {
  const squareValue = 250;
  return (
    <div className={style.container}>
      <Link
        passHref
        href={{
          pathname: '/detail',
          query: {
            workInfo: JSON.stringify(workInfo),
          },
        }}
      >
        <Image
          src={workInfo.imageUrl}
          width={squareValue}
          height={squareValue}
          alt='work image'
        />
      </Link>
    </div>
  );
};

export default Card;
