"use client";
import React from "react";
import CarSlider from "./ProjectCard";  // Import CarSlider instead of ProjectCard

const projects = [
  {
    title: "Blog Site",
    description: "",
    imageUrl: "https://i.ibb.co/yhtgSqY/New-Project-1.png",
    githubUrl: "https://github.com/DeelakaLakpura/Simple-Blog",
    demoUrl: "henoraads.com/henorablog",
  },
  {
    title: "Chatbot for Sri Lanka's Tourism Industry",
    description: "",
    imageUrl: "https://i.ibb.co/StQdPmC/New-Project-2.png",
    githubUrl: "https://github.com/DeelakaLakpura/Chatbot-for-Sri-Lanka-s-Tourism-Industry",
    demoUrl: "",
  },
  {
    title: "Point of Sales System",
    description: "",
    imageUrl: "https://i.ibb.co/x2KNBjK/New-Project-3.png",
    githubUrl: "https://github.com/DeelakaLakpura/POINT-OF-SALES-SYSTEM",
    demoUrl: "",
  },
  {
    title: "Ecommerce System",
    description: "",
    imageUrl: "https://i.ibb.co/bvCxq4f/New-Project-4.png",
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
