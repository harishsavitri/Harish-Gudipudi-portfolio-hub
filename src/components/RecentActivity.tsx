import { Activity, Calendar, GitBranch, Cloud, Server, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const activities = [
  {
    icon: Cloud,
    title: "Deployed AWS Infrastructure",
    description: "Set up multi-region EKS cluster with Terraform",
    date: "2 days ago",
    color: "text-cyan-400"
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipeline Update",
    description: "Implemented Github workflow with Jenkins CI/CD pipeline",
    date: "5 days ago",
    color: "text-orange-400"
  },
  {
    icon: Server,
    title: "Infrastructure Monitoring",
    description: "Configured Prometheus & Grafana dashboards",
    date: "1 week ago",
    color: "text-cyan-400"
  },
  {
    icon: Code,
    title: "Automation Scripts",
    description: "Created Python scripts for AWS resource management",
    date: "2 weeks ago",
    color: "text-orange-400"
  }
];

const RecentActivity = () => {
  return (
    <section id="activity" className="py-20 px-4 bg-gradient-to-b from-background to-background/80">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Activity className="w-6 h-6 text-cyan-400 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Recent Activity
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Latest updates from my DevOps journey
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-orange-400 to-cyan-400 opacity-30" />

          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="relative pl-20 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full ${activity.color} bg-current shadow-lg shadow-current/50 group-hover:scale-125 transition-transform duration-300`} />

                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-cyan-400/50 transition-all duration-300 group-hover:translate-x-2 group-hover:shadow-lg group-hover:shadow-cyan-400/10">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg bg-background/50 ${activity.color}`}>
                        <activity.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                          {activity.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {activity.description}
                        </p>
                        <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground/70">
                          <Calendar className="w-3 h-3" />
                          <span>{activity.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentActivity;
