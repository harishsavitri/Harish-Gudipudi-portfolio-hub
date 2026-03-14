import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Facebook, Instagram, Twitter, Send, Youtube, Sparkles, Star, Hexagon, Circle, Triangle } from "lucide-react";
import { useState, useEffect } from "react";
import SkillPercentage from "./percentage";

const greetings = [
  { text: "I'm,  Into", name: "Aws Devops Engineer" },
  { text: "I'm,  An", name: "Indian" },
  { text: "I'm,  A", name: "Traveler" },
  { text: "This Is My", name: "Creative Life" },
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
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-accent/25 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-orange-500/10 rounded-full blur-3xl" />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-32 left-[15%] text-cyan-400/40 animate-float-up-down">
          <Hexagon className="w-12 h-12" />
        </div>
        <div className="absolute top-48 right-[20%] text-orange-400/40 animate-orbit" style={{ animationDelay: '0.5s' }}>
          <Star className="w-8 h-8" />
        </div>
        <div className="absolute bottom-40 left-[25%] text-pink-400/40 animate-zigzag">
          <Triangle className="w-10 h-10" />
        </div>
        <div className="absolute bottom-60 right-[15%] text-purple-400/40 animate-swing">
          <Circle className="w-6 h-6" />
        </div>
        <div className="absolute top-[60%] left-[8%] text-green-400/30 animate-pulse-scale">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-[30%] right-[8%] text-yellow-400/30 animate-float-diagonal">
          <Hexagon className="w-10 h-10" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(186, 90%, 45%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(186, 90%, 45%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(186, 90%, 45%)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(25, 95%, 58%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(25, 95%, 58%)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(25, 95%, 58%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q400,100 800,300 T1600,200" stroke="url(#lineGrad1)" strokeWidth="2" fill="none" className="animate-pulse" />
          <path d="M0,400 Q300,300 600,500 T1200,400" stroke="url(#lineGrad2)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
        </svg>
        
        {/* Floating Dots */}
        <div className="absolute top-[20%] left-[40%] w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute top-[70%] left-[60%] w-3 h-3 bg-orange-400 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
        <div className="absolute top-[40%] left-[80%] w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
        <div className="absolute top-[85%] left-[30%] w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '1.5s' }} />
      </div>

      <div className="container max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Main Photo Frame */}
          <div className="relative animate-fade-in">
            {/* Enhanced Photo Frame Background */}
            <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-orange-500/20 rounded-[40px] blur-2xl animate-pulse" />
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/20 rounded-[35px] blur-xl" />
            
            {/* Rotating Ring */}
            <div className="absolute -inset-6 border-2 border-dashed border-cyan-400/30 rounded-[35px] animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute -inset-10 border border-orange-400/20 rounded-[40px] animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
            
            {/* Corner Decorations */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-cyan-400 rounded-tl-xl" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-orange-400 rounded-tr-xl" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-pink-400 rounded-bl-xl" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-purple-400 rounded-br-xl" />
            
            {/* Floating Icons around photo */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-cyan-400 animate-float-up-down">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="absolute top-1/2 -left-10 -translate-y-1/2 text-orange-400 animate-swing">
              <Star className="w-5 h-5" />
            </div>
            <div className="absolute top-1/2 -right-10 -translate-y-1/2 text-pink-400 animate-orbit">
              <Hexagon className="w-5 h-5" />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-purple-400 animate-pulse-scale">
              <Circle className="w-5 h-5" />
            </div>
            
            <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-50 animate-pulse" />
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-primary shadow-glow bg-gradient-to-br from-card to-background">
              <img
                src="https://github.com/harishsavitri/Harish-Gudipudi-portfolio-hub/blob/main/harishnew.png?raw=true"
                alt="AWS DevOps Engineer"
                className="w-full h-full object-cover"
              />
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Hello Sticker */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-orange-500/20 border border-cyan-400/50 rounded-full animate-bounce backdrop-blur-sm">
              <span className="text-2xl">👋</span>
              <span className="text-cyan-400 font-bold text-lg">Hello!</span>
              <Sparkles className="w-4 h-4 text-orange-400" />
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
              <div className="about-heading flex items-center gap-2 justify-center lg:justify-start">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                <h1 className="text-2xl font-bold text-primary">About Myself</h1>
                <div className="w-12 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
              </div>
            </div>

            {/* Secondary Photo Frame */}
            <div className="relative animate-fade-in">
              {/* Enhanced Secondary Photo Background */}
              <div className="absolute -inset-6 bg-gradient-to-br from-orange-500/20 via-pink-500/10 to-cyan-500/20 rounded-[35px] blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -inset-3 bg-gradient-to-tl from-accent/20 to-primary/10 rounded-[30px] blur-lg" />
              
              {/* Rotating Rings */}
              <div className="absolute -inset-5 border border-dashed border-orange-400/30 rounded-[32px] animate-spin" style={{ animationDuration: '25s' }} />
              <div className="absolute -inset-8 border border-cyan-400/15 rounded-[38px] animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />
              
              {/* Corner Decorations */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-3 border-l-3 border-orange-400 rounded-tl-lg" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-3 border-r-3 border-cyan-400 rounded-tr-lg" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-3 border-l-3 border-purple-400 rounded-bl-lg" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-3 border-r-3 border-pink-400 rounded-br-lg" />
              
              {/* Floating Icons */}
              <div className="absolute -top-6 left-1/4 text-orange-400 animate-zigzag" style={{ animationDelay: '0.5s' }}>
                <Star className="w-5 h-5" />
              </div>
              <div className="absolute -top-6 right-1/4 text-cyan-400 animate-float-up-down" style={{ animationDelay: '1s' }}>
                <Hexagon className="w-5 h-5" />
              </div>
              <div className="absolute top-1/2 -left-8 -translate-y-1/2 text-purple-400 animate-orbit" style={{ animationDelay: '0.3s' }}>
                <Circle className="w-4 h-4" />
              </div>
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-pink-400 animate-swing" style={{ animationDelay: '0.7s' }}>
                <Sparkles className="w-5 h-5" />
              </div>
              
              <div className="absolute inset-0 gradient-primary rounded-3xl blur-2xl opacity-50 animate-pulse" />
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-primary shadow-glow bg-gradient-to-br from-card to-background">
                <img
                  src="https://github.com/harishsavitri/Harish-Gudipudi-portfolio-hub/blob/main/mypic.png?raw=true"
                  alt="Harish Gowda Gudipudi"
                  className="w-full h-full object-cover"
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
            </div>
            
            {/* Skill Percentage Section */}
            <div className="mt-6 p-4 bg-gradient-to-br from-card/80 to-card/50 rounded-xl border border-border backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />
              <div className="relative z-10">
                <SkillPercentage />
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              DevOps Engineer with a foundational background in MCA, leveraging a strong understanding of analytical and research methodologies to transition into cloud computing and automation. Passionate about integrating scientific principles with technology, I have gained hands-on experience with tools like Docker, Kubernetes, and Jenkins through dedicated learning and practical projects.My academic background equips me with a unique approach to problem-solving and process improvement, which I am eager to apply in a DevOps environment. Committed to continuous learning, I'm driven to contribute to the development and deployment of reliable, scalable systems..
            </p>

            {/* About Info */}
            <ul className="space-y-3 text-muted-foreground bg-gradient-to-br from-card/60 to-transparent p-6 rounded-2xl border border-border/50 backdrop-blur-sm">
              <li className="flex gap-2 items-center"><span className="text-primary font-semibold">Profile:</span> <span>DevOps Engineer & Analytics</span></li>
              <li className="flex gap-2 items-center"><span className="text-primary font-semibold">Domain:</span> <span>Cloud Computing & AWS DevOps</span></li>
              <li className="flex gap-2 items-center"><span className="text-primary font-semibold">Education:</span> <span>Master Of Computer Applications</span></li>
              <li className="flex gap-2 items-center"><span className="text-primary font-semibold">Language:</span> <span>English, Hindi, Telugu</span></li>
              <li className="flex gap-2 items-center"><span className="text-primary font-semibold">Other Skills:</span> <span>Cloud, Excel, Git, JIRA, Google Analytics & SEO</span></li>
              <li className="flex gap-2 items-center"><span className="text-primary font-semibold">Interest:</span> <span>Traveling, Travel Photography, Listening Music</span></li>
            </ul>
            <div className="flex items-center gap-4 mt-4">
              <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                <span className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">10+</span>
                <p className="text-muted-foreground text-sm">Projects Completed</p>
              </div>
              <a 
                href="https://www.linkedin.com/in/harish-gudipudi-b98726178//" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full hover:scale-105 transition-transform shadow-lg shadow-blue-500/30 font-semibold"
              >
                LinkedIn
              </a>
            </div>
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
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-cyan-500/10 rounded-full border border-green-500/30">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
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
