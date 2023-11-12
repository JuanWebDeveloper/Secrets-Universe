import { Fragment } from 'react';
import { WelcomeBanner, IntroAboutUs, Services, Testimonials, Contact, SEO } from '@/ui/components';

const HomePage = () => {
 return (
  <Fragment>
   <SEO title='Secrets Universe' />
   <WelcomeBanner />
   <IntroAboutUs />
   <Services />
   <Testimonials />
   <Contact />
  </Fragment>
 );
};

export default HomePage;
