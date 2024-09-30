import ProfileCard from "./components/ProfileCard";
import ProjectShowcase from "./components/ProjectShowcase";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
   // Inside the Home component
<div className="min-h-screen bg-gray-900 text-white flex flex-col lg:flex-row justify-between items-start p-3 md:p-3 lg:p-6 overflow-x-hidden">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

  {/* ProfileCard Section */}
  <div className="lg:w-1/4 w-full rounded-lg p-2 mb-10 lg:mb-0">
    <ProfileCard />
  </div>

  {/* Container for HeroSection and ProjectShowcase */}
  <div className="flex-1 flex flex-col lg:ml-6 w-full max-w-full">
  {/* Hero Section */}
  <div className="bg-gray-900 rounded-lg p-3 shadow-lg w-full min-h-[400px] overflow-hidden">
    <HeroSection />
  </div>

  <div className="container mx-auto max-w-full mt-6"> {/* Added margin-top for spacing */}
    <ProjectShowcase />
  </div>
  <div className="mt-6"> <Footer /></div>
 
</div>




 
</div>

  );
}
