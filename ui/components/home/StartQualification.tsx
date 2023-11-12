import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as startOutline } from '@fortawesome/free-regular-svg-icons';

library.add(faStar, startOutline);

export const StartQualification = ({ qualification }: { qualification: number }) => {
 const stars: Array<React.ReactNode> = [];
 const maxStarts: number = 5;

 for (let i = 1; i <= maxStarts; i++) {
  if (i <= qualification) {
   stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
  } else {
   stars.push(<FontAwesomeIcon icon={startOutline} key={i} />);
  }
 }

 return <div>{stars}</div>;
};
