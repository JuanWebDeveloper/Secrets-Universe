import { TestimonialsData } from '@/tools/utils';
import { SingleTestimonial } from '@/ui/components';

export const Testimonials = () => {
 return (
  <div className='testimonials'>
   <div className='content'>
    <h2>Experiencias de Nuestros Clientes</h2>

    <div className='testimonial-slider'>
     {TestimonialsData.map((dataOfTestimonial) => {
      const { name, serviceType, qualification, testimonial, image, sliderPosition } = dataOfTestimonial;

      return (
       <SingleTestimonial
        name={name}
        serviceType={serviceType}
        qualification={qualification}
        testimonial={testimonial}
        image={image}
        sliderPosition={sliderPosition}
        key={dataOfTestimonial.sliderPosition}
       />
      );
     })}
    </div>
   </div>
  </div>
 );
};
