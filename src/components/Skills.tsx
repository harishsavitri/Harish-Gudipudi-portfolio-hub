import { Cloud, Container, GitBranch, Server, Shield, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Cloud,
    title: "AWS Services",
    description: "EC2, S3, Lambda, RDS, CloudFormation, ECS, EKS",
  },
  {
    icon: Container,
    title: "Containerization",
    description: "Docker, Kubernetes, Helm, Container Orchestration",
  },
  {
    icon: GitBranch,
    title: "CI/CD",
    description: "Jenkins, GitLab CI, GitHub Actions, ArgoCD",
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    description: "Terraform, Ansible, CloudFormation, Pulumi",
  },
  {
    icon: Shield,
    title: "Security & Monitoring",
    description: "AWS IAM, Security Groups, CloudWatch, Prometheus",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Python, Bash, PowerShell, API Integration",
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="container max-w-6xl">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Technical <span className="text-gradient-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cloud and DevOps skills to deliver enterprise-grade solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={skill.title}
                className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-glow animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
