"use client";
import React from "react";
import CarSlider from "./ProjectCard";  // Import CarSlider instead of ProjectCard

const projects = [
  {
    title: "Blog Site",
    description: "",
    imageUrl: "https://i.ibb.co/4pdxChL/5328461-2.png",
    githubUrl: "https://github.com/DeelakaLakpura/Simple-Blog",
    demoUrl: "henoraads.com/henorablog",
  },
  {
    title: "Chatbot for Sri Lanka's Tourism Industry",
    description: "",
    imageUrl: "https://i.ibb.co/tp6H9h4/5328461-1.png",
    githubUrl: "https://github.com/DeelakaLakpura/Chatbot-for-Sri-Lanka-s-Tourism-Industry",
    demoUrl: "",
  },
  {
    title: "Point of Sales System",
    description: "",
    imageUrl: "https://i.ibb.co/C6FTRht/5328461-3.png",
    githubUrl: "https://github.com/DeelakaLakpura/POINT-OF-SALES-SYSTEM",
    demoUrl: "",
  },
  {
    title: "Ecommerce System",
    description: "",
    imageUrl: "https://i.ibb.co/MPqgrLq/5328461-4.png",
    githubUrl: "https://github.com/DeelakaLakpura/PrimePapers",
    demoUrl: "http://primepapers.kesug.com/",
  },

 
  
  // More projects...
];

const ProjectShowcase = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-4 p-4">
      <CarSlider cars={projects} />  {/* Pass projects as cars prop */}
    </div>
  );
};

export default ProjectShowcase;
