"use client";
import React from "react";

const testimonials = [
  {
    name: "Dulanjana Kavishan",
    feedback: "The product quality is exceptional, and the customer service is top-notch!",
    role: "Freelancer | Undergraduate",
    avatar: "https://i.ibb.co/Wc4dM4c/Whats-App-Image-2024-09-30-at-20-50-09.jpg",
  },
  {
    name: "Prabani Hearath",
    feedback: "This team truly goes above and beyond. I'm a very satisfied customer.",
    role: "Freelancer | Undergraduate",
    avatar: "https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-1/432787226_122132175962159744_7671380885539367150_n.jpg?stp=dst-jpg_s480x480&_nc_cat=105&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF2xg-qqmbU9rlGWuS-W2_yIAXKqcIWE4QgBcqpwhYThP5NUEwSO6H9PN5pfShleJLzaOS2d8fzfhZLJLkSzhFO&_nc_ohc=s5goOsTysskQ7kNvgFMpw4i&_nc_ht=scontent-ams4-1.xx&_nc_gid=AzNgWSCv3-3wsmNckoTEGEu&oh=00_AYDvOkyUDS61qfJYaxW-h6yaqBY3-OqfaZ8yTbkHcmQtCQ&oe=670083E4",
  },
  {
    name: "Vinodya Senarathne",
    feedback: "Quick delivery, professional support, and excellent service. Highly recommend!",
    role: "Freelancer | Undergraduate",
    avatar: "https://i.ibb.co/1GCMtzf/Whats-App-Image-2024-09-30-at-20-52-49.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <div className=" py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-extrabold text-white mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What My Clients Say
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex flex-col items-center">
  <img
    src={testimonial.avatar}
    alt={`${testimonial.name} avatar`}
    className="w-20 h-20 rounded-full mx-auto mb-4 transform hover:scale-110 transition-transform duration-300"
  />
 
</div>

            <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
            <p className="text-gray-400 text-sm">{testimonial.role}</p>
            <p className="text-gray-300 mt-4">{testimonial.feedback}</p>
            <div className="flex justify-center mt-4">
              <i className="fas fa-quote-left text-green-500 text-2xl"></i>
            </div>
            <motion.div
              className="absolute inset-0 bg-gray-900 opacity-0 transition-opacity duration-500 hover:opacity-30"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
