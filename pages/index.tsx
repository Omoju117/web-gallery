import { VFC } from 'react';
import Card from '../components/atoms/card';
import Footer from '../components/templates/footer';
import Header from '../components/templates/header';
import style from './work.module.scss';

const Work: VFC = () => {
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
              <li className={style.card_style_big}>
                <Card imageUrl='/asset/images/PoolSide.svg' />
              </li>
              <li className={style.card_style_big}>
                <Card imageUrl='/asset/images/MenAndHisDog.svg' />
              </li>
              <li className={style.card_style_big}>
                <Card imageUrl='/asset/images/ChristmasCard.svg' />
              </li>
            </ul>
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
