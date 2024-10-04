import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import contactLottie from './contact.json';  // Your Lottie animation file
import Swal from 'sweetalert2';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log(result.message); 
        
        // Show success alert
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        });
        
        // Optionally, reset the form or clear input fields here
      } else {
        const error = await response.json();
        console.error('Error sending email:', error.message);
  
        // Show error alert
        Swal.fire({
          title: 'Error!',
          text: error.message || 'Something went wrong. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      console.error('Error:', error);
      
      // Show error alert for network issues
      Swal.fire({
        title: 'Error!',
        text: 'Network error. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gray-900 text-white flex justify-center items-center p-4 overflow-hidden"
    >
     
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"></div>

    
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative z-10 w-full max-w-6xl bg-opacity-40 bg-clip-padding backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden p-0"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center bg-gray-800 p-4 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 rounded-l-2xl"
        >
          <Lottie animationData={contactLottie} loop={true} className="w-full h-full max-w-md" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center space-y-4 p-6 bg-gray-800 bg-opacity-70 rounded-r-2xl"
        >
          <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-teal-400 via-green-500 to-teal-400 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-center mb-2">
            Let's collaborate to bring your vision to life! Fill out the form below to get in touch.
          </p>

          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -3 }}
              className="relative"
            >
              <input 
                {...register("name", { required: true })}
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
              />
              <i className="fas fa-user absolute right-3 top-3 text-teal-500"></i>
              {errors.name && <motion.p className="text-red-500 text-sm mt-2">Name is required.</motion.p>}
            </motion.div>
            
           
            <motion.div 
              whileHover={{ scale: 1.05, y: -3 }}
              className="relative"
            >
              <input 
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address"
                  }
                })}
                type="email"
                placeholder="Your Email (e.g. deelaka@gmail.com)"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
              />
              <i className="fas fa-envelope absolute right-3 top-3 text-teal-500"></i>
              {errors.email && <motion.p className="text-red-500 text-sm mt-2">{errors.email.message}</motion.p>}
            </motion.div>
            
         
            <motion.div 
              whileHover={{ scale: 1.05, y: -3 }}
              className="relative"
            >
              <textarea 
                {...register("message", { required: true })}
                placeholder="Tell us more about your project..."
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
                rows="4"
              ></textarea>
              <i className="fas fa-comment-dots absolute right-3 top-3 text-teal-500"></i>
              {errors.message && <motion.p className="text-red-500 text-sm mt-2">Message is required.</motion.p>}
            </motion.div>

           
            <motion.button
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95, rotate: -2 }}
              className="max-w-40 bg-gradient-to-r p-2 from-teal-400 to-green-500 text-white font-bold py-3 rounded-lg shadow-xl transition-transform duration-300 hover:shadow-2xl"
              type="submit"
            >
              <i className="fas fa-paper-plane mr-2"></i> Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
