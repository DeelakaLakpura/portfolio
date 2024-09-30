'use client';
import { useState } from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";



const ProfileCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <motion.div
      className="max-w-sm bg-gray-800 text-white rounded-xl shadow-md p-10 flex flex-col "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Profile Image and Name */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.img
          src="https://i.ibb.co/BjqHT5B/profile-img.png"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-800 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onClick={handleImageClick}
        />
        <h2 className="mt-4 text-xl font-bold">Deelaka Lakpura Galpaya</h2>
        <p className="text-sm text-gray-400">
           Mobile App Developer| UI/UX Designer <br /> 
        </p>
      </motion.div>

      {/* Residence Info */}
      <div className="mt-6 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Residence</span>
          <span className="text-gray-400">Sri Lanka</span>
        </div>
        <div className="flex justify-between">
          <span>City</span>
          <span className="text-gray-400">Homagama</span>
        </div>
        <div className="flex justify-between">
          <span>Age</span>
          <span className="text-gray-400">23</span>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Languages Section */}
      <h3 className="text-sm font-semibold">Languages</h3>
      <div className="flex justify-between items-center mt-3">
        <CircularProgress percentage="98%" language="Sinhala" />
        <CircularProgress percentage="88%" language="English" />
      </div>

      {/* Skills Section */}
      <h3 className="mt-6 text-sm font-semibold">Skills and Competencies</h3>
      <div className="mt-4 space-y-3">
        <SkillBar skill="Mobile App Development" percentage="96%" />
        <SkillBar skill="Web Development" percentage="67%" />
        <SkillBar skill="Rest APIs" percentage="94%" />
        <SkillBar skill="Designing (UI/UX)" percentage="66%" />
      </div>

      <h3 className="mt-6 text-sm font-semibold">Technologies</h3>
      <div className="flex flex-wrap justify-center mt-4 space-x-4">
        {/** Example SVG Icons for Technologies */}
        <motion.img
          src="https://i.ibb.co/qxKQTxv/pngwing-com.png"
          alt="HTML5"
          className="w-12 h-12"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 1 }}
          animate={{ rotate: [0, 360], transition: { repeat: Infinity, duration: 4 } }}
        />
        <motion.img
          src="https://i.ibb.co/ZLXKQxQ/pngwing-com-1.png"
          alt="CSS3"
          className="w-12 h-12"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 1 }}
          animate={{ rotate: [0, 360], transition: { repeat: Infinity, duration: 4 } }}
        />
        <motion.img
          src="https://i.ibb.co/8ND02fz/pngwing-com-2.png"
          alt="JavaScript"
          className="w-12 h-12"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 1 }}
          animate={{ rotate: [0, 360], transition: { repeat: Infinity, duration: 4 } }}
        />
         <motion.img
          src="https://i.ibb.co/nrHxTtm/pngwing-com-3.png"
          alt="JavaScript"
          className="w-12 h-12"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 1 }}
          animate={{ rotate: [0, 360], transition: { repeat: Infinity, duration: 4 } }}
        />
     
     <motion.img
          src="https://i.ibb.co/QN298nt/pngwing-com-9.png"
          alt="JavaScript"
          className="w-12 h-12"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 1 }}
          animate={{ rotate: [0, 360], transition: { repeat: Infinity, duration: 4 } }}
        />
     
     <motion.img
          src="https://i.ibb.co/F7h82B4/pngwing-com-6.png"
          alt="JavaScript"
          className="w-12 h-12"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 1 }}
          animate={{ rotate: [0, 360], transition: { repeat: Infinity, duration: 4 } }}
        />


<motion.img
          src="https://i.ibb.co/7Jr2CV9/pngwing-com-7.png"
          alt="JavaScript"
          className="w-12 h-12"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 1 }}
          animate={{ rotate: [0, 360], transition: { repeat: Infinity, duration: 4 } }}
        />
        <motion.img
          src="https://i.ibb.co/JQnK21w/pngwing-com-8.png"
          alt="JavaScript"
          className="w-12 h-12"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 1 }}
          animate={{ rotate: [0, 360], transition: { repeat: Infinity, duration: 4 } }}
        />
        <motion.img
          src="https://i.ibb.co/jyDJCz1/pngwing-com-10.png"
          alt="JavaScript"
          className="w-12 h-12"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 1 }}
          animate={{ rotate: [0, 360], transition: { repeat: Infinity, duration: 4 } }}
        /><motion.img
        src="https://i.ibb.co/KsPNtKP/pngwing-com-11.png"
        alt="JavaScript"
        className="w-12 h-12"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 1 }}
        animate={{ rotate: [0, 360], transition: { repeat: Infinity, duration: 4 } }}
      />
     
     
     
      </div>

      {/* Education Section */}
      <h3 className="mt-6 text-sm font-semibold">Education</h3>
<div className="mt-4 space-y-3">
  <div className="flex flex-col bg-gray-700 p-3 rounded-md">
    <span className="text-base font-bold">BSc in Software Engineering</span>
    <span className="text-gray-400 text-sm">University of Plymouth <span className="text-gray-400 text-xs">UK 🇬🇧</span></span>
  </div>
  <div className="flex flex-col bg-gray-700 p-3 rounded-md">
    <span className="text-base font-bold">Royal College - Colombo</span>
    <span className="text-gray-400 text-sm">Sri Lanka <span className="text-gray-400 text-xs">🇱🇰</span></span>
  </div>
</div>


      {/* Social Icons */}
      <div className="flex justify-center mt-6 space-x-4">
        <motion.a href="https://github.com/DeelakaLakpura" className="text-white" whileHover={{ scale: 1.2 }}>
          <FaGithub />
        </motion.a>
        
        <motion.a href="https://www.facebook.com/deelaka.lakpura.54/" className="text-white" whileHover={{ scale: 1.2 }}>
          <FaFacebook />
        </motion.a>
        <motion.a href="https://www.linkedin.com/in/deelaka-lakpura/" className="text-white" whileHover={{ scale: 1.2 }}>
          <FaLinkedin />
        </motion.a>
      </div>

      {/* Popup for Profile Image */}
      {isOpen && (
        <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
      >
        <motion.img
          src="https://i.ibb.co/BjqHT5B/profile-img.png"
          alt="Profile Popup"
          className="w-128 h-128 rounded-lg border-4 border-gray-800 z-60" // Increased z-index here
          onClick={(e) => e.stopPropagation()} // Prevent click from closing popup
        />
      </motion.div>
      )}
    </motion.div>
  );
};

const SkillBar = ({ skill, percentage }) => {
  return (
    <div>
      <div className="flex justify-between text-xs text-gray-400">
        <span>{skill}</span>
        <span>{percentage}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
        <motion.div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: percentage }}
          initial={{ width: 0 }}
          animate={{ width: percentage }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </div>
  );
};

const CircularProgress = ({ percentage, language }) => {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center"
        initial={{ strokeDasharray: "0, 100" }}
        animate={{ strokeDasharray: `${percentage}, 100` }}
        transition={{ duration: 1 }}
      >
        <span className="text-lg font-bold">{percentage}</span>
      </motion.div>
      <span className="mt-2 text-gray-400">{language}</span>
    </div>
  );
};

export default ProfileCard;
