import Hero from "@/components/Hero";
import DemoVideo from "@/components/DemoVideo";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <DemoVideo />
      <Skills />
      <Resume />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="container text-center text-muted-foreground">
          <p>© 2026 Website Designed By Harish Gudipudi. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
