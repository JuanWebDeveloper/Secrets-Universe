import { Fragment } from 'react';
import { WelcomeBanner, AboutUs } from '@/ui/components';

const HomePage = () => {
 return (
  <Fragment>
   <WelcomeBanner />
   <AboutUs />
  </Fragment>
 );
};

export default HomePage;
