import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { TestimonialsData } from '@/tools/utils';
import { handleNextSlide, handlePrevSlide, toggleTestimonialVisibility } from '@/tools/helpers';
import { SingleTestimonial } from '@/ui/components';

library.add(faArrowLeft, faArrowRight);

export const Testimonials = () => {
 const [currentTestimonial, setCurrentTestimonial] = useState(1);

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
        currentTestimonial={currentTestimonial}
        key={dataOfTestimonial.sliderPosition}
       />
      );
     })}

     <div className='controls'>
      <div className='controls-arrow'>
       <button
        className='arrow-prev'
        onClick={() => {
         handlePrevSlide(setCurrentTestimonial, TestimonialsData.length);
         toggleTestimonialVisibility('prev-testimonial');
        }}
       >
        <FontAwesomeIcon icon={faArrowLeft} />
       </button>
       <button
        className='arrow-next'
        onClick={() => {
         handleNextSlide(setCurrentTestimonial, TestimonialsData.length);
         toggleTestimonialVisibility('next-testimonial');
        }}
       >
        <FontAwesomeIcon icon={faArrowRight} />
       </button>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};
