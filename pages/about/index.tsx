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
          <h1>Contact</h1>
          <p className={style.description}>
            Hello, I’m Haley, an American illustrator from Rochester, New York
            living and working in Koblenz, Germany. Clients: The New York Times,
            The New Yorker, Trip Advisor, WeTransfer, House & Garden UK, The
            Home Depot, Le Bon Marché, WIRED UK, WIRED Japan, Target, BBC,
            Architektur & Wohnen, Brigitte, Bon Appétit, Epicurious, Thread For
            Men, Society6, Psychologie Heute, Thread for Women, Overheard,
            Eltern Magazin, Working Women Magazin, Haspa, Annabelle Magazin,
            Freundin Magazin, Flow Magazine, Financial Times Weekend Magazine,
            Myself Magazin, Condé Nast, VICE, ZEIT Wissen, Süddeutsche Zeitung
            Magazin & more.{' '}
          </p>
          <section className={style.profile}>
            <h3>Profile</h3>
            <p>Academic history: Seijo University</p>
            <p>Career: Web developer, Illustrator</p>
            <p>TOEFL iBT Score: 95</p>
            <p>TOEIC Score: 885</p>
          </section>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default About;
