import { ExternalLink } from "lucide-react";

const MyWork = () => {
  const works = [
    { image: "/workpic1.png", title: "Project 1" },
    { image: "/workpic2.png", title: "Project 2" },
    { image: "/workpic3.png", title: "Project 3" },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-orange-500/5" />
      
      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
              My Work
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore some of my recent projects and achievements
          </p>
        </div>

        {/* Photo Frames Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden border-4 border-cyan-500/30 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image */}
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                  {work.title}
                </span>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50 group-hover:border-orange-400 transition-colors duration-300" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/50 group-hover:border-orange-400 transition-colors duration-300" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400/50 group-hover:border-orange-400 transition-colors duration-300" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400/50 group-hover:border-orange-400 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-orange-500 hover:from-cyan-400 hover:to-orange-400 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] group"
          >
            See More Projects
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
