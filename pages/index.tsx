import { Fragment } from 'react';
import { WelcomeBanner, IntroAboutUs } from '@/ui/components';

const HomePage = () => {
 return (
  <Fragment>
   <WelcomeBanner />
   <IntroAboutUs />
  </Fragment>
 );
};

export default HomePage;
