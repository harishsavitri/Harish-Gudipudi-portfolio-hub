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
              <source src="https://dms.licdn.com/playlist/vid/v2/D5605AQE0jS9cRw9ZnA/mp4-720p-30fp-crf28/B56ZrfT1Q5JwCI-/0/1764683113294?e=1765288800&v=beta&t=HESC1IaxFlRNUaHY27hD6PlQV5OAxyQAkYxlwl8nmuE" type="video/mp4" />
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
              poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=675&fit=crop"
            >
              <source src="https://dms.licdn.com/playlist/vid/v2/D5605AQFdvu_Gz18_vQ/mp4-720p-30fp-crf28/B56ZrjEEXDK4CM-/0/1764746088710?e=1765353600&v=beta&t=IvInZRqWD2If0_CfQQZZCx4deS8TJH-CVCSY-HBCVYY" type="video/mp4" />
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
              <source src="https://dms.licdn.com/playlist/vid/v2/D5605AQEZb0B35dilMw/mp4-640p-30fp-crf28/B56ZrjOO15MEBw-/0/1764748752776?e=1765357200&v=beta&t=Ht6y6fGZc65Gbr0sDuEFXR7E6K2EUncJUHmi8cjSlOk" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">
            Demo:  My personal video tag, please checkout my video is here.
          </p>
        </div>
      </div> 
    </section>
  );
};

export default DemoVideo;
