import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Quote, Heart } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  name: string;
  image: string;
  rating: number;
  date: string;
  text: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-8">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-serif mb-3">Was unsere Kunden sagen</h2>
        <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
      </div>
      
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="testimonials-slider md:px-12"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="px-4 md:px-8 py-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500"
                  />
                  <div className="absolute -top-1 -right-1 bg-yellow-500 rounded-full p-1">
                    <Quote className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-lg">{testimonial.name}</h4>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Heart key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;