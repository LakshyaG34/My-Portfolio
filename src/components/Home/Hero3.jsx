import { IoArrowBackCircle, IoArrowForwardCircle } from "react-icons/io5";
import TestimonialCards from "../cards/testimonialCards";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Yash Garg",
    role: "CTO, Fintech Labs",
    review:
      "Lakshya did an excellent job completing my project on time and within the agreed budget. The communication was clear throughout the process, and the quality of work was impressive. They understood my requirements perfectly and delivered exactly what I needed. I’m very satisfied with the result and would definitely recommend Lakshya for future projects.",
  },
  {
    name: "Sandhya K",
    role: "Manager, Bhavik Enterprise",
    review:
      "I had the pleasure of working with Lakshya Goyal, and I must say, I am truly impressed with the quality of work and the speed at which they delivered. Despite being a new profile, they exceeded my expectations in every aspect. The project was completed in no time, and the attention to detail was remarkable. I will definitely recommend Lakshya Goyal for future projects. They have proven themselves to be reliable, efficient, and highly skilled. Keep up the great work!",
  },
  {
    name: "Kranti Pedhabudhi",
    role: "CEO, Nohung",
    review:
      "The team helped us modernize our platform and integrate AI workflows. Highly recommended.",
  },
  {
    name: "Emily Chen",
    role: "Head of Engineering, CloudWorks",
    review:
      "Professional team with deep technical expertise. They delivered faster than expected.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero3 = () => {
  return (
    <section className="py-28 w-full max-w-7xl mx-auto px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-between items-center mb-12"
      >
        <h2 className="text-3xl font-semibold">
          Client <span className="text-yellow-400">Reviews</span>
        </h2>

        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.15, rotate: -6 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-prev-custom cursor-pointer rounded-full p-2 text-gray-400 hover:text-yellow-400 hover:bg-white/5 transition-all duration-300"
          >
            <IoArrowBackCircle size={40} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.15, rotate: 6 }}
            whileTap={{ scale: 0.9 }}
            className="swiper-button-next-custom cursor-pointer rounded-full p-2 text-gray-400 hover:text-yellow-400 hover:bg-white/5 transition-all duration-300"
          >
            <IoArrowForwardCircle size={40} />
          </motion.button>
        </div>
      </motion.div>

      {/* Swiper */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          grabCursor={true}
          speed={700}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div variants={cardVariants} whileHover={{ y: -10 }}>
                <TestimonialCards {...item} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Hero3;
