const SkillPercentage = () => {
  const skills = [
    { name: "Configuration Management", percentage: 70 },
    { name: "Infrastructure as Code (IaC)", percentage: 85 },
    { name: "CI/CD Tools", percentage: 90 },
    { name: "Version Control Tools", percentage: 85 },
    { name: "Containerization Tools", percentage: 80 },
  ];

  return (
    <div className="space-y-4">
      <p className="text-lg font-semibold text-primary mb-4">Skills</p>
      {skills.map((skill, index) => (
        <div key={index} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span className="text-foreground">{skill.name}</span>
            <span className="text-primary">{skill.percentage}%</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-1000"
              style={{ width: `${skill.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillPercentage;
