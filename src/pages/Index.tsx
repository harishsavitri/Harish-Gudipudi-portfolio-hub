import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DemoVideo from "@/components/DemoVideo";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import { Achievements } from "@/components/Achivements";
import RecentActivity from "@/components/RecentActivity";
import Contact from "@/components/Contact";

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
      <div id="recent-activity">
        <RecentActivity />
      </div>
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container text-center text-muted-foreground">
          <p>© 2026 Made With By Harish Gudipudi, All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
