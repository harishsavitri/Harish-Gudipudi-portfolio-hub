import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About
          </h2>
          <p className="text-primary text-lg">Myself</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-xl border border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Hi! This is Harish Gudipudi.
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Dynamic (MCA) Post graduate with a focus on Devops Engineer, I am
              eager to Apply My Technical Awareness and Innovative Problem-Solving
              Skills in a challenging Devops role. Seeking a position
              where I can contribute to Cutting-Edge Projects using Fast Growing
              Technologies and Collaborate with a Forward-Thinking team.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild>
                <a
                  href="file:///C:/Users/HP/OneDrive/Desktop/HARISH_GUDIPUDI_DevOps_MCA_2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="gudiputiharish@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Connect with me:</span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/harish gudipudi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/harishsavitri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
