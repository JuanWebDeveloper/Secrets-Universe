import { ServicesData } from '@/tools/utils';
import { SingleCard } from './SingleCard';

interface typeDataServiceCard {
 title: string;
 description: string;
 image: string;
}

export const Services = () => {
 return (
  <div className='services' id='services'>
   <div className='content'>
    <div className='services-text'>
     <h2>Nuestros Servicios</h2>
     <h3>Descubre En Detalle Los Servicios Que Ponemos A Tu Disposición</h3>
    </div>
    <div className='services-cards'>
     {ServicesData.map((service: typeDataServiceCard) => (
      <SingleCard key={service.title} title={service.title} description={service.description} image={service.image} />
     ))}
    </div>
   </div>
  </div>
 );
};
