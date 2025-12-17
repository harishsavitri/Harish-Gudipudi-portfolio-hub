import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Facebook, Instagram, Twitter, Send, Youtube } from "lucide-react";
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
            {/* Triangle Animations */}
            <div className="absolute -top-8 -left-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-cyan-400 animate-float-up-down opacity-80" />
            <div className="absolute -top-4 -right-6 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[26px] border-b-orange-400 animate-orbit opacity-80" />
            <div className="absolute -bottom-6 -left-4 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[31px] border-b-pink-400 animate-zigzag opacity-80" />
            <div className="absolute -bottom-8 -right-8 w-0 h-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-b-[38px] border-b-purple-400 animate-pulse-scale opacity-80" />
            <div className="absolute top-1/2 -left-12 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[21px] border-b-green-400 animate-swing opacity-70" />
            <div className="absolute top-1/4 -right-12 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-yellow-400 animate-float-diagonal opacity-70" />
            
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
            
            <div className="about-details">
              <div className="about-heading">
                <h1 className="text-2xl font-bold text-primary">About Myself</h1>
              </div>
            </div>

            {/* Secondary Photo Frame */}
            <div className="relative animate-fade-in">
              {/* Triangle Animations */}
              <div className="absolute -top-6 -left-6 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-orange-400 animate-zigzag opacity-80" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -top-8 -right-4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-cyan-400 animate-float-up-down opacity-80" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-4 -left-8 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-purple-400 animate-orbit opacity-80" style={{ animationDelay: '0.3s' }} />
              <div className="absolute -bottom-6 -right-6 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-b-[31px] border-b-pink-400 animate-swing opacity-80" style={{ animationDelay: '0.7s' }} />
              <div className="absolute top-1/3 -left-12 w-0 h-0 border-l-[13px] border-l-transparent border-r-[13px] border-r-transparent border-b-[22px] border-b-yellow-400 animate-pulse-scale opacity-70" style={{ animationDelay: '0.2s' }} />
              <div className="absolute top-2/3 -right-12 w-0 h-0 border-l-[11px] border-l-transparent border-r-[11px] border-r-transparent border-b-[19px] border-b-green-400 animate-float-diagonal opacity-70" style={{ animationDelay: '0.8s' }} />
              
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-50 animate-pulse" />
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-primary shadow-glow">
                <img
                  src="https://github.com/harishsavitri/Harish-Gudipudi-portfolio-hub/blob/main/mypic.png?raw=true"
                  alt="Harish Gowda Gudipudi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl">
              DevOps Engineer with a foundational background in MCA, leveraging a strong understanding of analytical and research methodologies to transition into cloud computing and automation. Passionate about integrating scientific principles with technology, I have gained hands-on experience with tools like Docker, Kubernetes, and Jenkins through dedicated learning and practical projects.
            </p>

            {/* About Info */}
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary font-semibold">Profile:</span> <span>DevOps Engineer & Analytics</span></li>
              <li className="flex gap-2"><span className="text-primary font-semibold">Domain:</span> <span>Cloud Computing & AWS DevOps</span></li>
              <li className="flex gap-2"><span className="text-primary font-semibold">Education:</span> <span>Bachelor of Science</span></li>
              <li className="flex gap-2"><span className="text-primary font-semibold">Language:</span> <span>English, Hindi, Marathi</span></li>
              <li className="flex gap-2"><span className="text-primary font-semibold">Other Skills:</span> <span>Cloud, Excel, Git, JIRA, Google Analytics & SEO</span></li>
              <li className="flex gap-2"><span className="text-primary font-semibold">Interest:</span> <span>Traveling, Travel Photography, Teaching</span></li>
            </ul>
            
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
                className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 group"
              >
                <Facebook className="w-5 h-5 group-hover:animate-spin transition-transform" />
              </a>
              <a 
                href="https://www.instagram.com/gudipudiharish_gowda/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white hover:scale-110 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:animate-spin transition-transform" />
              </a>
              <a 
                href="https://x.com/GHarish3951" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 text-white hover:scale-110 hover:shadow-lg hover:shadow-sky-500/40 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 group-hover:animate-spin transition-transform" />
              </a>
              <a 
                href="https://t.me/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 text-white hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 group"
              >
                <Send className="w-5 h-5 group-hover:animate-spin transition-transform" />
              </a>
              <a 
                href="https://www.youtube.com/@harishgudiputi5760/videos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white hover:scale-110 hover:shadow-lg hover:shadow-red-500/40 transition-all duration-300 group"
              >
                <Youtube className="w-5 h-5 group-hover:animate-spin transition-transform" />
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <ArrowDown className="w-6 h-6 text-primary" />
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Available for Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
