import { VFC } from 'react';
import Card from '../../components/atoms/card';
import Logo from '../../components/atoms/logo';
import Footer from '../../components/templates/footer';
import Header from '../../components/templates/header';
import style from './work.module.scss';

const Work: VFC = () => {
  return (
    <>
      <div className={style.container}>
        <Header />
        <section className={style.contents}>
          <Logo />
          <ul className={style.card_list}>
            <li className={style.card}>
              <Card imageUrl='/asset/images/handcraft.svg' />
            </li>
            <li className={style.card}>
              <Card imageUrl='/asset/images/color_pattern.svg' />
            </li>
            <li className={style.card}>
              <Card imageUrl='/asset/images/set_designer.svg' />
            </li>
            <li className={style.card}>
              <Card imageUrl='/asset/images/men_&_his_dog.svg' />
            </li>
            <li className={style.card}>
              <Card imageUrl='/asset/images/men_&_his_dog.svg' />
            </li>
            <li className={style.card}>
              <Card imageUrl='/asset/images/men_&_his_dog.svg' />
            </li>
            <li className={style.card}>
              <Card imageUrl='/asset/images/men_&_his_dog.svg' />
            </li>
          </ul>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Work;
