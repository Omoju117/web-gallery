import { useRouter } from 'next/dist/client/router';
import { VFC } from 'react';
import Image from 'next/image';
import Header from '../../components/templates/header';
import style from './detail.module.scss';
import isJSONStringified from '../../type_guard/workImage';
import Link from 'next/link';
import { WorkInfo } from '../../data/data';

const Detail: VFC = () => {
  const router = useRouter();
  let workInfo: WorkInfo = {} as WorkInfo;
  if (isJSONStringified(router.query.workInfo)) {
    workInfo = JSON.parse(router.query.workInfo);
  }

  return (
    <div className={style.container}>
      <Header />
      <section className={`${style.contents} ${style.fadeIn}`}>
        <span className={style.title}>{workInfo.title}</span>
        <p className={style.description}>{workInfo.description}</p>
        <Image
          src={workInfo.imageUrl}
          width={300}
          height={300}
          alt='work image'
        />
        <Link passHref href='/'>
          <a className={style.navigation_back}>Back</a>
        </Link>
      </section>
    </div>
  );
};

export default Detail;
