import ProfileCard from "./components/ProfileCard";
import ProjectShowcase from "./components/ProjectShowcase";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import TestomonialSection from "./components/TestimonialSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row justify-between items-start p-3 md:p-3 lg:p-6 overflow-x-hidden">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

      <div className="lg:w-1/4 w-full rounded-lg p-2 mb-10 lg:mb-0">
        <ProfileCard />
      </div>

      <div className="flex-1 flex flex-col lg:ml-6 w-full max-w-full">
        <div className="bg-gray-900 rounded-lg p-3 shadow-lg w-full min-h-[400px] overflow-hidden">
          <HeroSection />
        </div>

        <div className="container mx-auto max-w-full mt-2"> 
          <ProjectShowcase />
        </div>

        <TestomonialSection />

        {/* Full width footer */}
        <div className="w-full mt-6 bg-gray-900">
          <Footer />
        </div>
      </div>
    </div>
  );
}
