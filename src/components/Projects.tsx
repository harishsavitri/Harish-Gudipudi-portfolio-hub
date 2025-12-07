const Projects = () => {
  return (
    <section className="py-20 px-4" id="portfolio">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">Harish Gudipudi Projectwork's</h2>
          <p className="text-muted-foreground text-lg">Some of my recent work</p>
        </div>

        <div className="space-y-16">
          {/* Project 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://github.com/harishsavitri/Harish-Gudipudi-portfolio-hub/blob/main/map-removebg-preview.png?raw=true" 
                alt="React Google Maps Route Planner"
                className="rounded-xl shadow-glow w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <span className="text-primary font-semibold">Project 1</span>
              <h3 className="text-2xl md:text-3xl font-bold">React Google Maps Route Planner</h3>
              <p className="text-muted-foreground">
                Developed a React app using Google Maps API to calculate and display routes based on user-input coordinates, with dynamic route rendering and travel mode selection (driving, walking, bicycling, transit) through real-time updates using Google Maps DirectionsService and DirectionsRenderer.
              </p>
              <a 
                href="https://lovaraj02.github.io/Route_finder/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://github.com/harishsavitri/Harish-Gudipudi-portfolio-hub/blob/main/port-removebg-preview.png?raw=true" 
                alt="Personal Portfolio"
                className="rounded-xl shadow-glow w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <span className="text-primary font-semibold">Project 2</span>
              <h3 className="text-2xl md:text-3xl font-bold">Personal Portfolio</h3>
              <p className="text-muted-foreground">
                Designed and developed a responsive portfolio website using HTML, CSS, and JavaScript
              </p>
              <a 
                href="#"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://github.com/harishsavitri/Harish-Gudipudi-portfolio-hub/blob/main/eco-removebg-preview.png?raw=true" 
                alt="eCommerce Website"
                className="rounded-xl shadow-glow w-full"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <span className="text-primary font-semibold">Project 3</span>
              <h3 className="text-2xl md:text-3xl font-bold">eCommerce Website</h3>
              <p className="text-muted-foreground">
                My skills in web development enabled me to create innovative, responsive web pages.
              </p>
              <a 
                href="https://lovaraj02.github.io/ecommerce-website/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
