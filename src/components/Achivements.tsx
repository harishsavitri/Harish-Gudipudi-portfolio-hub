import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    title: "Devops Learning Internship",
    description:
      "Completed a Devops with Jenkins, Docker, Kubernetes internship at CODTECH IT SOLUTIONS PVT.LTD, working on live projects (Oct 2025 – Nov 2025), demonstrating enthusiasm and practical skills in Machine Learning concepts.",
    link: "",
  },
  {
    title: "Python Certification - Kaggle Technologies",
    description:
      "Completed Python certification from KAGGLE Technologies, gaining hands-on experience in data manipulation, visualization, and solving real-world problems using Python in an interactive learning environment.",
    link: "https://drive.google.com/file/d/1YaSmLqG1p729fI5M2ygKnpX_sR3i1d2t/view?usp=drive_link",
  },
  {
    title: "Aws Cloud Assessment",
    description:
      "Completed a one-month internship in Aws Cloud Assessment at LearnTube.Ai (Oct 2025), gaining practical experience in building user-friendly and interactive aws cloud services.",
    link: "",
  },
  {
    title: "Linux Certification",
    description:
      'Completed the "Introduction to Linux" certification from FRONTLINES EDUTECH PRIVATE LIMITED (April 2025), gaining foundational knowledge in Linux server technologies and their Adminstraction.',
    link: "",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Achievements
          </h2>
          <p className="text-primary text-lg">Some honourable mentions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {achievement.description}
                  </p>
                  <Button variant="ghost" size="sm" asChild className="p-0 h-auto">
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 inline-flex items-center gap-2"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
