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
              poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=675&fit=crop"
            >
              <source src="https://www.linkedin.com/posts/harish-gudipudi-b98726178_activity-7401617446706814976-w0Xp?utm_source=share&utm_medium=member_desktop&rcm=ACoAACocJSQB6U3pdysV-QUIuGPmnZbj0LVchUA" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Demo: Automated AWS Infrastructure Deployment with Terraform & Jenkins
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
