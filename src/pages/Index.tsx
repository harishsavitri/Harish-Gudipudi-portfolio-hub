import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DemoVideo from "@/components/DemoVideo";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import { Achievements } from "@/components/Achivements";
import RecentActivity from "@/components/RecentActivity";
import Contact from "@/components/Contact";
import CodingProfile from "@/components/CodingProfile";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="demo">
        <DemoVideo />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="resume">
        <Resume />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="coding-profiles">
        <CodingProfile />
      </div>
      <div id="recent-activity">
        <RecentActivity />
      </div>
      <Contact />
      
      {/* Footer */}
      <footer className="relative py-12 px-4 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-orange-500 to-cyan-500" />
        
        <div className="container relative text-center">
          <div className="flex flex-col items-center gap-4">
            {/* Heart Animation */}
            <p className="text-lg text-muted-foreground flex items-center gap-2 flex-wrap justify-center">
              <span>© 2026</span>
              <span className="text-foreground font-semibold">Made With</span>
              <span className="text-2xl animate-pulse">❤️</span>
              <span className="text-foreground font-semibold">By</span>
              <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent font-bold">
                Harish Gudipudi
              </span>
            </p>
            <p className="text-sm text-muted-foreground/70">All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
