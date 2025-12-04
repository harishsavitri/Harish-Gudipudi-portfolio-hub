const DemoVideo = () => {
  return (
    <section id="demo" className="py-20 px-4">
      <div className="container max-w-6xl">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold">
            See It In <span className="text-gradient-accent">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how I architect and deploy scalable cloud infrastructure with automated CI/CD pipelines
          </p>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="absolute inset-0 gradient-accent rounded-2xl blur-3xl opacity-20" />
          <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-accent/30 shadow-glow-accent bg-card">
            <video
              controls
              className="w-full h-full object-cover"
              poster="https://plus.unsplash.com/premium_photo-1724122058027-ffd47258d7cc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            >
              <source src="https://github.com/harishsavitri/Harish-Gudipudi-portfolio-hub/blob/main/capgemini%20campus.mp4?raw=true" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Demo: CAPGEMINI CAMPUS, 115/32 & 35, ISB Rd, Financial District, Nanakramguda, Hyderabad.
          </p>
          <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-accent/30 shadow-glow-accent bg-card">
            <video
              controls
              className="w-full h-full object-cover"
              poster="https://plus.unsplash.com/premium_photo-1708589336783-13cf5e5efb65?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            >
              <source src="https://github.com/harishsavitri/Harish-Gudipudi-portfolio-hub/blob/main/pub.mp4?raw=true" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Demo:  It's a Pub Time (Zero40 Trivia Nights – Zero40) | Jubilee Hills– Hyderabad 271/A, Road Number 10.
          </p>
          <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-accent/30 shadow-glow-accent bg-card">
            <video
              controls
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=675&fit=crop"
            >
              <source src="https://github.com/harishsavitri/Harish-Gudipudi-portfolio-hub/blob/main/harishvideo.mp4?raw=true" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Demo:  My personal video tag, please checkout my video is here.
          </p>
          <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-accent/30 shadow-glow-accent bg-card">
            <video
              controls
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1581363990197-eb1e2b3c9272?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            >
              <source src="https://github.com/harishsavitri/Harish-Gudipudi-portfolio-hub/blob/main/akhanda.mp4?raw=true" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Demo:  Akhanda thandavam  please checkout my video is here.
          </p>
        </div>
      </div> 
    </section>
  );
};

export default DemoVideo;
