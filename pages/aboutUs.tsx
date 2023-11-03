import { Fragment } from 'react';
import { AboutUsOverview, AboutUsDetails, MeetOurExpertTeam } from '@/ui/components';

const AboutUs = () => {
 return (
  <Fragment>
   <AboutUsOverview />
   <AboutUsDetails />
   <MeetOurExpertTeam />
  </Fragment>
 );
};

export default AboutUs;
