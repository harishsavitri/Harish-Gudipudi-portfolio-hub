import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior DevOps Engineer",
    company: "Capgemini,Hyd",
    period: "2026 - Present",
    description: "Leading cloud infrastructure migration to AWS, implementing CI/CD pipelines, and managing Kubernetes clusters for microservices architecture.",
  },
  {
    title: "DevOps Engineer",
    company: "Capgemini,Hyd",
    period: "2023 - 2025",
    description: "Automated infrastructure provisioning using Terraform, managed containerized applications with Docker, and optimized deployment processes.",
  },
  {
    title: "System Administrator",
    company: "Digital Systems Corp,Hyd",
    period: "2020 - 2022",
    description: "Maintained Linux servers, implemented monitoring solutions, and collaborated with development teams on deployment strategies.",
  },
];

const certifications = [
  "AWS Certified DevOps Engineer - Professional",
  "AWS Certified Solutions Architect - Associate",
  "Certified Kubernetes Administrator (CKA)",
  "HashiCorp Certified: Terraform Associate",
];

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="container max-w-6xl">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Experience & <span className="text-gradient-accent">Credentials</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-background" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            {experiences.map((exp, index) => (
              <Card
                key={exp.company}
                className="p-6 bg-card border-border hover:border-primary transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-primary">{exp.title}</h4>
                    <p className="text-foreground font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{exp.description}</p>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                <Award className="w-5 h-5 text-background" />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <Card className="p-6 bg-card border-border space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm">{cert}</p>
                </div>
              ))}
            </Card>

            <div className="flex items-center gap-3 mb-6 mt-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <Card className="p-6 bg-card border-border animate-fade-in overflow-hidden" style={{ animationDelay: "0.4s" }}>
              {/* Institute Photo Frame */}
              <div className="relative mb-4 group">
                <div className="relative w-full h-32 rounded-xl overflow-hidden border-4 border-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-[3px]">
                  <div className="w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-blue-900/80 to-purple-900/80 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=200&fit=crop" 
                      alt="LBRCE Campus"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-3 right-3">
                      <p className="text-xs font-semibold text-white drop-shadow-lg">LBRCE Campus, Mylavaram</p>
                    </div>
                  </div>
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse flex items-center justify-center">
                  <span className="text-xs">🎓</span>
                </div>
              </div>
              
              <h4 className="font-bold text-lg mb-1 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                MCA (Master of Computer Applications)
              </h4>
              <p className="text-foreground font-medium text-sm mb-2">
                Lakireddy Bali Reddy College Of Engineering & Technology (Autonomous)
              </p>
              <p className="text-muted-foreground text-xs mb-3">JNTU-Kakinada</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">2016 - 2019</span>
                <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">CGPA: 9.04/10</span>
              </div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary font-medium">Coursework:</span> DBMS, JAVA, C Language, OS, OOAD, Web Technologies, Software Engineering
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
