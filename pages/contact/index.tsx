import { VFC } from 'react';
import Header from '../../components/templates/header';

const Contact: VFC = () => {
  const debug = 'contact page';
  return (
    <div>
      <Header />
      <div>{debug}</div>
    </div>
  );
};

export default Contact;
