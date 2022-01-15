import { VFC } from 'react';
import Header from '../../components/templates/header';

const About: VFC = () => {
  const debug = 'debug';
  return (
    <div>
      <Header />
      <div>{debug} About page</div>
    </div>
  );
};

export default About;
