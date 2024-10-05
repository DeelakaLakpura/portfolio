// components/ExperienceTimeline.jsx

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer",
    company: "Spark Solutions",
    duration: "Jan 2022 - Present",
    description: "Developed responsive web applications using React and Tailwind CSS.",
    icon: "fab fa-react", // Font Awesome icon class
  },
  {
    title: "UI/UX Designer",
    company: "Freelance",
    duration: "Jun 2020 - Dec 2021",
    description: "Designed user interfaces and conducted user research for web applications.",
    icon: "fas fa-pencil-alt", // Font Awesome icon class
  },
  {
    title: "Mobile Developer",
    company: "Freelance",
    duration: "Jan 2019 - Present",
    description: "Developed cross-platform mobile applications using FLuter and React Native.",
    icon: "fas fa-code", // Font Awesome icon class
  },
  {
    title: "Backend Developer",
    company: "Ds Solutions",
    duration: "Jun 2019 - Dec 2022",
    description: "Built RESTful APIs and integrated third-party services for web applications.",
    icon: "fas fa-server",
  },
];

const ExperienceTimeline = () => {
  return (
    <section className=" bg-gray-900 text-white" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-600">Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start mb-10 w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
            
              <motion.div
                className="bg-gray-800 shadow-lg rounded-lg p-6 w-full transform transition-transform hover:scale-105"
                whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                animate={{
                  y: [0, -5, 0], // Loop animation for vertical movement
                  scale: [1, 1.05, 1], // Additional loop scale animation
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                 <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white mr-4 mb-2">
                <i className={`${experience.icon} text-2xl`} />
              </div>
                <h3 className="text-xl font-semibold">{experience.title}</h3>
                <h4 className="text-gray-400">{experience.company}</h4>
                <p className="text-gray-300 mb-2">{experience.duration}</p>
                <p className="text-gray-200">{experience.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
