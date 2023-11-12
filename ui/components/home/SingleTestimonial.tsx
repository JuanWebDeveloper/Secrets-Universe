import Image from 'next/image';
import { BaseUrl } from '@/tools/utils';
import { StartQualification } from '@/ui/components';

interface typeDataTestimonial {
 name: string;
 serviceType: string;
 qualification: number;
 testimonial: string;
 image: string;
 sliderPosition: number;
 currentTestimonial: number;
}

export const SingleTestimonial = (dataTestimonial: typeDataTestimonial) => {
 const { name, serviceType, qualification, testimonial, image, sliderPosition, currentTestimonial } = dataTestimonial;
 return (
  sliderPosition === currentTestimonial && (
   <div className='testimonial'>
    <div className='user-data'>
     <Image
      src={`${BaseUrl}/images/home/testimonials/${image}`}
      alt={`${name} Opina sobre ${serviceType}`}
      width={100}
      height={100}
     />
     <h2>{name}</h2>
    </div>
    <div className='user-qualification'>
     <StartQualification qualification={qualification} />
    </div>
    <div className='user-testimonial'>
     <h3>{serviceType}</h3>
     <p>{testimonial}</p>
    </div>
   </div>
  )
 );
};
