import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo Frame */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-50 animate-pulse" />
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-primary shadow-glow">
              <img
                src="https://github.com/harishsavitri/Harish-Gudipudi-portfolio-hub/blob/main/harishpic.png?raw=true"
                alt="AWS DevOps Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary rounded-full">
              <span className="text-primary font-semibold">Hi! This is Harish(Gowda) Gudipudi.</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Building Cloud
              <span className="text-gradient-primary"> Infrastructure</span>
              <br />at Scale
            </h1>
            <div class="about-details" data-aos="fade-up" data-aos-delay="300ms" >
                <div class="about-heading">
                    <h1>About</h1>
                    <h6>Myself</h6>
                </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Dynamic (MCA) Post graduate with a focus on Aws Devops Engineer, I am eager to Apply My Technical
                    Awareness and Innovative Problem-Solving Skills in a challenging AWs Devops role. Seeking a
                    position where I can contribute to Cutting-Edge Projects using Fast Growing Technologies and Collaborate
                    with a Forward-Thinking team.
                    Architecting robust, scalable cloud solutions with AWS, Kubernetes, and modern DevOps practices.
                    Passionate about automation, CI/CD, and infrastructure as code.    
            </p>
            <a href="file:///C:/Users/HP/OneDrive/Desktop/HARISH_GUDIPUDI_DevOps_MCA_2025.pdf" class="cta">Checkout my Resume</a>
                
                    
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="gradient-primary text-background font-bold hover:opacity-90 transition-all shadow-glow"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="font-semibold hover:bg-secondary/80 transition-all"
                onClick={() => scrollToSection("demo")}
              >
                View Demo
              </Button>
            </div>
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Available for Projects</span>
              </div>
            </div>
          </div>
        </div>
        

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
