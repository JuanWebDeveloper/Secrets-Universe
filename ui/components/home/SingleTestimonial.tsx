import { BaseUrl } from '@/tools/utils';
import Image from 'next/image';

export interface typeDataTestimonial {
 name: string;
 serviceType: string;
 qualification: number;
 testimonial: string;
 image: string;
 sliderPosition: number;
}

export const SingleTestimonial = (dataTestimonial: typeDataTestimonial) => {
 const { name, serviceType, qualification, testimonial, image, sliderPosition } = dataTestimonial;
 return (
  <div className='testimonial'>
   <div className='user-data'>
    <Image
     src={`${BaseUrl}/images/home/testimonials/${image}`}
     alt={`${name} Opina sobre ${serviceType}`}
     width={175}
     height={175}
    />
    <h2>{name}</h2>
   </div>
   <div className='user-qualification'>{qualification}</div>
   <div className='user-testimonial'>
    <h3>{serviceType}</h3>
    <p>{testimonial}</p>
   </div>
  </div>
 );
};
