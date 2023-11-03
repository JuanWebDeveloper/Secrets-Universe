import { Fragment } from 'react';
import { WelcomeBanner, IntroAboutUs, Services } from '@/ui/components';

const HomePage = () => {
 return (
  <Fragment>
   <WelcomeBanner />
   <IntroAboutUs />
   <Services />
  </Fragment>
 );
};

export default HomePage;
