import { useState } from "react";
import { Menu, X, Home, Play, Wrench, FolderOpen, FileText, Trophy, Activity, Mail } from "lucide-react";

const menuItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "demo", label: "Demo", icon: Play },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "recent-activity", label: "Activity", icon: Activity },
  { id: "contact", label: "Contact", icon: Mail },
];

// Click sound using Web Audio API
const playClickSound = () => {
  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = "sine";
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  } catch (e) {
    console.log("Audio not supported");
  }
};

// Vibration feedback
const triggerVibration = () => {
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (id: string) => {
    playClickSound();
    triggerVibration();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleToggle = () => {
    playClickSound();
    triggerVibration();
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleMenuClick("hero")}
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Hi!, I'm Harish Gowda Gudipudi 
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-200 active:scale-95"
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleToggle}
              className="lg:hidden p-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-all active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl lg:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-4 p-8">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`flex items-center gap-4 px-8 py-4 w-full max-w-xs rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 border border-border/30 hover:border-primary/50 hover:from-primary/10 hover:to-accent/10 transition-all duration-200 active:scale-95 ${
                isOpen ? "animate-fade-in" : ""
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="p-2 rounded-xl bg-gradient-to-br from-cyan-500/20 to-orange-500/20">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Spacer for fixed nav */}
      <div className="h-16" />
    </>
  );
};

export default Navigation;
