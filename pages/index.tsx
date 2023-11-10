import { Fragment } from 'react';
import { WelcomeBanner, IntroAboutUs, Services, Testimonials } from '@/ui/components';

const HomePage = () => {
 return (
  <Fragment>
   <WelcomeBanner />
   <IntroAboutUs />
   <Services />
   <Testimonials />
  </Fragment>
 );
};

export default HomePage;
