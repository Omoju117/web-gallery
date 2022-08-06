import { VFC } from 'react';
import Card from '../components/atoms/card';
import Footer from '../components/templates/footer';
import Header from '../components/templates/header';
import { commonImagePath, WorkInfo } from '../data/data';
import style from './work.module.scss';

const Work: VFC = () => {
  const workInfoList: WorkInfo[] = [
    {
      imageUrl: commonImagePath + 'PoolSide.svg',
      title: 'Summer',
      description:
        'This slumber poolside came down when I stared blankly at a cafe. Nature objects such as rocks, plants, and water are given gracefully warm colors. Stacked furniture is necessary for this space.',
    },
    {
      imageUrl: commonImagePath + 'MenAndHisDog.svg',
      title: 'Zushi Beach',
      description:
        'This nostalgic sunset beach is my hometown. I drew it as a present for my friend, referencing some pictures. Limited colors give this work a comfortable harmony.',
    },
    {
      imageUrl: commonImagePath + 'ChristmasCard.svg',
      title: 'Winter',
      description:
        'I drew this work as the postcards for winter 2021. The contrast between the room and outside is the key to this painting. I wish that person who bought this work enjoyed it. Thank you.',
    },
  ];

  return (
    <>
      <div className={style.container}>
        <Header />
        <section className={style.contents}>
          {/* <Logo /> */}
          <div className={style.fadeIn_wrap}>
            <div className={style.catch_copy}>
              <span>Uniquely Shaped Nature, Furniture, Common objects</span>
            </div>
            <ul className={`${style.card_list_style_big}`}>
              {workInfoList.map((workInfo, index) => (
                <li key={index} className={style.card_style_big}>
                  <Card workInfo={workInfo} />
                </li>
              ))}
            </ul>
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
