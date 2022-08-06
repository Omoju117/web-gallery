import { VFC } from 'react';
import Header from '../../components/templates/header';
import style from './about.module.scss';
import Footer from '../../components/templates/footer';

const About: VFC = () => {
  return (
    <div className={style.container}>
      <Header />
      <section className={`${style.contents} ${style.fadeIn}`}>
        {/* <Logo /> */}
        <div className={style.contents_wrapper}>
          <h1>Profile</h1>
          <p className={style.description}>
            I’m Kazuki Endo, a Japanese illustrator and web developer, living in
            Kanagawa. My work is a combination of things that are found in daily
            life and changing perspectives. I use playful and comfortable colors
            that make people feel graceful and unusually shaped objects to
            create unique works.
          </p>
          <section className={style.profile}>
            <h3>Information</h3>
            <p>Academic history: Seijo University</p>
            <p>Career: Web developer, Illustrator</p>
            <p>TOEFL iBT Score: 90</p>
            <p>E-mail: kazuki.endo117@gmail.com</p>
          </section>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default About;
