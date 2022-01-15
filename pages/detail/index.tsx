import { useRouter } from 'next/dist/client/router';
import { VFC } from 'react';
import Image from 'next/image';
import Header from '../../components/templates/header';
import style from './detail.module.scss';
import isWorkImage from '../../type_guard/workImage';

const Detail: VFC = () => {
  const debug = 'Detail';
  const router = useRouter();
  let imageUrl: string = '';
  if (isWorkImage(router.query)) {
    imageUrl = router.query.imageUrl;
  }
  console.log(imageUrl);

  return (
    <div className={style.container}>
      <Header />
      <section className={style.contents}>
        <span className={style.title}>{debug}</span>
        <p className={style.description}>
          I was lucky to collaborate with Bally to create these three artworks
          inspired by Their Vintage Poster series for their Mother’s Day
          Campaign.
        </p>
        <Image src={imageUrl} width={300} height={300} alt='work image' />
      </section>
    </div>
  );
};

export default Detail;
