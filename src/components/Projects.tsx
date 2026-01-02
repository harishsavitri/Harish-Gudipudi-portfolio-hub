import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Lift And Shift Application Workload (AWS Project)",
      description: "Briefly introduce the concept of a Multi-Tier Web Application. Explain the Lift and Shift Strategy and why it's useful for migrating applications to AWS.",
      link: "https://learnwithdivya.hashnode.dev/lift-and-shift-application-workload-aws-project",
      image: "/awspic.webp",
      tags: ["AWS", "Migration", "Multi-Tier"]
    },
    {
      title: "Production Level CICD Pipeline Project",
      description: "Integrating Git, Jenkins, Docker, Kubernetes, Ansible, and Terraform on AWS to automate deployments with robust error handling and security best practices.",
      link: "https://learnwithdivya.hashnode.dev/production-level-cicd-pipeline-project-cicd-devops-project",
      image: "/teacode.webp",
      tags: ["Jenkins", "Docker", "Kubernetes", "Terraform"]
    },
    {
      title: "Full Stack CICD DevOps Project",
      description: "Implemented a robust multi-tier pipeline integrated with SSL certificates. This project automates and secures deployment processes!",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7407259191255470080/",
      image: "/kubernetes.gif",
      tags: ["CI/CD", "SSL", "DevOps"]
    },
    {
      title: "Deploying Super Mario on Kubernetes",
      description: "Deploy a Super Mario game on Amazon's Elastic Kubernetes Service (EKS) with scalability, reliability, and easy management.",
      link: "https://learnwithdivya.hashnode.dev/deploying-super-mario-on-kubernetes",
      image: "/awseks.webp",
      tags: ["EKS", "Kubernetes", "AWS"]
    },
    {
      title: "Valentine's Day Special CI/CD Project",
      description: "Implementing a seamless CI/CD pipeline, automating deployments, integrating Git, Jenkins, Docker for efficiency.",
      link: "https://github.com/rishabhnmishra/customer_segmentation/blob/main/Customer_Segmentation-final.ipynb",
      image: "/jenkins.webp",
      tags: ["Jenkins", "Docker", "Git"]
    }
  ];

  return (
    <section id="project-section" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Below are sample projects demonstrating DevOps principles, including automation, CI/CD, and cloud deployment.
          </p>
        </div>

        {/* Featured Project Images Banner */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-border/50">
          <div className="flex animate-[slide-in-right_20s_linear_infinite] gap-4 p-4 bg-card/30 backdrop-blur-sm">
            {[...projects, ...projects].map((project, index) => (
              <div key={index} className="flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:scale-105">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Large Image Display */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                
                {/* Overlay Icon */}
                <div className="absolute top-4 right-4 p-2 bg-primary/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-primary-foreground" />
                </div>
                
                {/* Tags on Image */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start gap-2 mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse" />
            </a>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/harishsavitri"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-cyan-500 text-primary-foreground rounded-full hover:scale-105 transition-transform font-semibold"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
