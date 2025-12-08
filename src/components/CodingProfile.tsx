import { Code, Github, Trophy, Target, Zap, Award } from "lucide-react";

const codingProfiles = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/harishsavitri",
    stats: "50+ Repositories",
    color: "from-gray-700 to-gray-900",
    hoverColor: "hover:shadow-gray-500/40",
  },
  {
    name: "LeetCode",
    icon: Code,
    url: "https://leetcode.com",
    stats: "200+ Problems Solved",
    color: "from-orange-500 to-yellow-500",
    hoverColor: "hover:shadow-orange-500/40",
  },
  {
    name: "HackerRank",
    icon: Trophy,
    url: "https://hackerrank.com",
    stats: "5 Star Rating",
    color: "from-green-500 to-emerald-600",
    hoverColor: "hover:shadow-green-500/40",
  },
  {
    name: "CodeChef",
    icon: Award,
    url: "https://codechef.com",
    stats: "3 Star Coder",
    color: "from-amber-600 to-amber-800",
    hoverColor: "hover:shadow-amber-500/40",
  },
  {
    name: "Codeforces",
    icon: Target,
    url: "https://codeforces.com",
    stats: "Specialist",
    color: "from-blue-500 to-cyan-500",
    hoverColor: "hover:shadow-blue-500/40",
  },
  {
    name: "GeeksforGeeks",
    icon: Zap,
    url: "https://geeksforgeeks.org",
    stats: "100+ Articles Read",
    color: "from-green-600 to-green-800",
    hoverColor: "hover:shadow-green-600/40",
  },
];

const CodingProfile = () => {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
              Coding Profiles
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check out my competitive programming and coding journey across various platforms
          </p>
        </div>

        {/* Coding Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {codingProfiles.map((profile, index) => (
            <a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-6 rounded-2xl bg-card border border-border overflow-hidden hover:scale-105 transition-all duration-300 ${profile.hoverColor} hover:shadow-xl animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative flex items-center gap-4">
                {/* Icon */}
                <div className={`p-4 rounded-xl bg-gradient-to-br ${profile.color} text-white shadow-lg`}>
                  <profile.icon className="w-8 h-8" />
                </div>
                
                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {profile.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {profile.stats}
                  </p>
                </div>

                {/* Arrow */}
                <div className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                  →
                </div>
              </div>

              {/* Bottom Gradient Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${profile.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfile;
