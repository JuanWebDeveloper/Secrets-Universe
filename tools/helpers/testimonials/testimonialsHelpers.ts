import { Dispatch, SetStateAction } from 'react';

type SetCurrentTestimonial = Dispatch<SetStateAction<number>>;

export const handleNextSlide = (setCurrentTestimonial: SetCurrentTestimonial, totalSlides: number) =>
 setCurrentTestimonial((current) => (current === totalSlides ? 1 : current + 1));

export const handlePrevSlide = (setCurrentTestimonial: SetCurrentTestimonial, totalSlides: number) =>
 setCurrentTestimonial((current) => (current === 1 ? totalSlides : current - 1));

export const toggleTestimonialVisibility = (direction: string) =>
 setTimeout(() => {
  const testimonial: HTMLDivElement | null = document.querySelector('.testimonial');
  testimonial?.classList.add(direction);
 }, 0.5);
