import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "devops@example.com",
    link: "mailto:devops@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    link: "tel:+15551234567",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/devopsengineer",
    link: "https://linkedin.com/in/devopsengineer",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/devopsengineer",
    link: "https://github.com/devopsengineer",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    link: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container max-w-4xl">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Available for consulting, freelance projects, or full-time opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card
                key={method.label}
                className="p-6 bg-card border-border hover:border-primary transition-all animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">{method.label}</p>
                    {method.link ? (
                      <a
                        href={method.link}
                        className="font-medium hover:text-primary transition-colors"
                        target={method.link.startsWith("http") ? "_blank" : undefined}
                        rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="font-medium">{method.value}</p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 text-center animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-2xl font-bold mb-4">Ready to Start a Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            I'm always interested in hearing about new opportunities and challenging projects.
          </p>
          <Button 
            size="lg" 
            className="gradient-accent text-background font-bold hover:opacity-90 transition-all shadow-glow-accent"
            onClick={() => window.location.href = "mailto:devops@example.com"}
          >
            Send Me an Email
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
