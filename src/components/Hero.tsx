import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Facebook, Instagram, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

const greetings = [
  { text: "Hi, I'm An", name: "Aws Devops Engineer" },
  { text: "Hi, I'm An", name: "Indian" },
  { text: "Hi, I'm A", name: "Traveler" },
  { text: "Hi, This Is My", name: "Creative Life" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % greetings.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Main Photo Frame */}
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
 {/* secondary Photo Frame */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-50 animate-pulse" />
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-primary shadow-glow">
              <img
                src="https://github.com/harishsavitri/Harish-Gudipudi-portfolio-hub/blob/main/mypic.png?raw=true"
                alt="Harish Gowda Gudipudi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Hello Sticker */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-orange-500/20 border border-cyan-400/50 rounded-full animate-bounce">
              <span className="text-2xl">👋</span>
              <span className="text-cyan-400 font-bold text-lg">Hello!</span>
            </div>
            
            {/* Animated Multilingual Name */}
            <div className="min-h-[80px] flex flex-col items-center lg:items-start">
              <p className={`text-lg text-muted-foreground transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                {greetings[currentIndex].text}
              </p>
              <h2 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                {greetings[currentIndex].name}
              </h2>
            </div>

            
            <div className="about-details" data-aos="fade-up" data-aos-delay="300ms">
                <div className="about-heading">
                    <h1>About Myself</h1>
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
              <Button 
                size="lg" 
                variant="outline"
                className="group font-semibold border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300"
                asChild
              >
                <a 
                  href="https://1drv.ms/b/c/7a5d4e694f0f523a/EaRzNYlvcn1OsZhHJdHNZIMBSeyEBYriJH2F3iUTVpAOeQ?e=mko91J" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </a>
              </Button>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start pt-6">
              <a 
                href="https://www.facebook.com/gudipudi.harish.9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/gudipudiharish_gowda/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/GHarish3951" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 text-white hover:scale-110 hover:shadow-lg hover:shadow-sky-500/40 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 text-muted-foreground">
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
