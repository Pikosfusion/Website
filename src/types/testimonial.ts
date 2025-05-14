export interface Testimonial {
  name: string;
  image: string;
  rating: number;
  date: string;
  text: string;
}

export interface TestimonialSliderProps {
  testimonials: Testimonial[];
}