import Image from 'next/image';
import { BaseUrl } from '@/tools/utils';
import { openWhatsApp } from '@/tools/helpers';

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
   <button className='consult-button' onClick={() => openWhatsApp(title)}>
    Consulta Ya
   </button>
  </div>
 );
};
