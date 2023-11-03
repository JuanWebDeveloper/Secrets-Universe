import { BaseUrl } from '@/tools/utils';
import Image from 'next/image';
import Link from 'next/link';

interface typeDataServiceCard {
 title: string;
 description: string;
 image: string;
}

export const SingleCard = ({ title, description, image }: typeDataServiceCard) => {
 return (
  <div className='single-card'>
   <div className='card-image'>
    <Image src={`${BaseUrl + image}`} width={500} height={500} alt={`Image of ${title}`} />
   </div>
   <div className='card-text'>
    <h4 className='card-title'>{title}</h4>
    <p className='card-description'>{description}</p>
   </div>
   <Link target='_Blank' href={''} className='consult-button'>
    Consulta Ya
   </Link>
  </div>
 );
};
