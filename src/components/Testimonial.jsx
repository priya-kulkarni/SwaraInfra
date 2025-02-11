import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/Testimonial.css";
import { ThemeContext } from "../components/ThemeContext"; // Import ThemeContext

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Software Engineer",
    text: "This platform helped me find my dream job. ",
    image: "https://html.rrdevs.net/preview/ribuild/assets/imgs/client-feedback/testi-author-1.png",
  },
  {
    id: 2,
    name: "David Smith",
    role: "Marketing Manager",
    text: "I found the perfect candidate through this website.",
    image: "https://html.rrdevs.net/preview/ribuild/assets/imgs/client-feedback/testi-author-1.png",
  },
  {
    id: 3,
    name: "Sophia Brown",
    role: "Product Designer",
    text: "A very professional and efficient platform.",
    image: "https://html.rrdevs.net/preview/ribuild/assets/imgs/client-feedback/testi-author-1.png",
  },
  {
    id: 4,
    name: "Michael Lee",
    role: "UX Designer",
    text: "User-friendly interface and excellent customer support!",
    image: "https://html.rrdevs.net/preview/ribuild/assets/imgs/client-feedback/testi-author-1.png",
  },
  {
    id: 5,
    name: "Emma White",
    role: "HR Specialist",
    text: "The best job portal I’ve used.",
    image: "https://html.rrdevs.net/preview/ribuild/assets/imgs/client-feedback/testi-author-1.png",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Project Manager",
    text: "Smooth process, great recommendations, and hiring.",
    image: "https://html.rrdevs.net/preview/ribuild/assets/imgs/client-feedback/testi-author-1.png",
  },
];

const TestimonialSlider = () => {
  const { theme } = useContext(ThemeContext); // Access theme from context

  return (
    <div className={`testimonials-sect ${theme}`}>
      <h2>Testimonial</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          425: { slidesPerView: 1 },
          375: { slidesPerView: 1 },
          320: { slidesPerView: 1 }
        }}
        className="testimonials-slider"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
              <h4>{testimonial.name}</h4>
              <p className="testimonial-role">{testimonial.role}</p>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
