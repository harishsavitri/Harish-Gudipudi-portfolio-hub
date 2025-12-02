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
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                alt="AWS DevOps Engineer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary rounded-full">
              <span className="text-primary font-semibold">AWS Certified DevOps Engineer</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Building Cloud
              <span className="text-gradient-primary"> Infrastructure</span>
              <br />at Scale
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Architecting robust, scalable cloud solutions with AWS, Kubernetes, and modern DevOps practices.
              Passionate about automation, CI/CD, and infrastructure as code.
            </p>
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
