import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Code, BarChart3, Brain, Cpu, Sparkles } from "lucide-react";

const About = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el, index) => {
      el.id = `animate-${index}`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      specialization: "Data Science",
      institution: "Career Point University",
      year: "2025",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      degree: "Bachelor of Science (B.Sc.)",
      institution: "DAV College",
      year: "2023",
      icon: <GraduationCap className="w-6 h-6" />,
    },
  ];

  const achievements = [
    {
      title: "Generative AI Research",
      description: "Award-winning research paper on Generative AI for Sustainable Future",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Data Analytics Internship",
      description: "Completed internship at Dataplay, Jaipur with recognition",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Full-Stack Development",
      description: "Expertise in Django, React, and REST API development",
      icon: <Code className="w-6 h-6" />,
    },
  ];

  const skills = {
    "Programming Languages": ["Python", "Java", "JavaScript", "SQL"],
    "Web Development": ["Django", "React", "HTML5", "CSS3", "REST APIs"],
    "Data Science": ["Machine Learning", "Data Analytics", "Data Visualization"],
    "Tools & Technologies": ["Power BI", "Excel", "OpenCV", "Git", "Linux"],
  };

  return (
    <section id="about" className="py-20 bg-section-bg relative overflow-hidden">
      {/* AI Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-secondary/5 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-accent/5 rounded-full blur-lg animate-pulse delay-2000"></div>
        
        {/* Floating AI Icons */}
        <div className="absolute top-1/4 right-1/4 animate-float">
          <Brain className="w-8 h-8 text-primary/20" />
        </div>
        <div className="absolute top-3/4 left-1/3 animate-float-delayed">
          <Cpu className="w-6 h-6 text-secondary/20" />
        </div>
        <div className="absolute top-1/2 right-1/6 animate-float-delayed-2">
          <Sparkles className="w-7 h-7 text-accent/20" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16" data-animate>
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-200"></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse delay-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about innovation and research, I combine academic excellence 
            with practical experience to solve real-world problems through data and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div className="space-y-6" data-animate>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display">Education</h3>
            </div>
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="card-shadow hover:shadow-glow transition-all duration-500 hover:-translate-y-1 group border-l-4 border-l-primary/20 hover:border-l-primary"
                data-animate
              >
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Subtle gradient overlay */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-start space-x-4 relative">
                    <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors group-hover:scale-110 duration-300">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">{edu.degree}</h4>
                      {edu.specialization && (
                        <p className="text-secondary font-medium text-gradient">{edu.specialization}</p>
                      )}
                      <p className="text-muted-foreground">{edu.institution}</p>
                      <Badge variant="outline" className="mt-2 group-hover:bg-primary/10 transition-colors">{edu.year}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-6" data-animate>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display">Key Achievements</h3>
            </div>
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="card-shadow hover:shadow-glow transition-all duration-500 hover:-translate-y-1 group border-l-4 border-l-secondary/20 hover:border-l-secondary"
                data-animate
              >
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Achievement glow effect */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-secondary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="flex items-start space-x-4 relative">
                    <div className="bg-secondary/10 p-3 rounded-xl group-hover:bg-secondary/20 transition-colors group-hover:scale-110 duration-300">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg group-hover:text-secondary transition-colors">{achievement.title}</h4>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-8" data-animate>
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display">Technical Skills</h3>
            </div>
            <div className="flex justify-center">
              <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <Card 
                key={category} 
                className="card-shadow hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden"
                data-animate
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                {/* Category gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <CardContent className="p-6 relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <h4 className="font-semibold text-primary group-hover:text-gradient transition-all">{category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary/20 hover:text-primary transition-all cursor-default group-hover:animate-pulse"
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;