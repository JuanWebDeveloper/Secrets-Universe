import { Fragment } from 'react';
import { AboutUsOverview, AboutUsDetails, MeetOurExpertTeam, SEO } from '@/ui/components';

const AboutUs = () => {
 return (
  <Fragment>
   <SEO title='Conoce Secrets Universe' />
   <AboutUsOverview />
   <AboutUsDetails />
   <MeetOurExpertTeam />
  </Fragment>
 );
};

export default AboutUs;
