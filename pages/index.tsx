import { Fragment } from 'react';
import { WelcomeBanner, IntroAboutUs, Services, Testimonials, Contact } from '@/ui/components';

const HomePage = () => {
 return (
  <Fragment>
   <WelcomeBanner />
   <IntroAboutUs />
   <Services />
   <Testimonials />
   <Contact />
  </Fragment>
 );
};

export default HomePage;
