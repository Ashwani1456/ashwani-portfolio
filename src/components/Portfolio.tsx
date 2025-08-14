import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, Star, GitBranch, Zap } from "lucide-react";
import dataDashboard from "@/assets/data-dashboard.jpg";
import railwaySystem from "@/assets/railway-system.jpg";
import mlModel from "@/assets/ml-model.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-project-index') || '0');
            setVisibleProjects(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projects = document.querySelectorAll('[data-project-card]');
    projects.forEach((project) => observer.observe(project));

    return () => observer.disconnect();
  }, [activeFilter]);

  const projects = [
    {
      title: "Railway Reservation System",
      description: "Django-based comprehensive train booking platform with Google Maps integration for route visualization and complex journey support.",
      image: railwaySystem,
      category: "Web Development",
      tech: ["Django", "Python", "Google Maps API", "PostgreSQL", "HTML/CSS"],
      github: "https://github.com/Ashwani1456",
      demo: "#",
      features: ["Real-time booking", "Route visualization", "Payment integration", "Admin dashboard"],
    },
    {
      title: "Dynamic Data Visualization Dashboard",
      description: "Interactive real-time analytics dashboard with advanced filtering capabilities and comprehensive KPI monitoring.",
      image: dataDashboard,
      category: "Data Analytics",
      tech: ["Python", "Power BI", "Pandas", "Matplotlib", "SQL"],
      github: "https://github.com/Ashwani1456",
      demo: "#",
      features: ["Real-time updates", "Interactive charts", "Custom filters", "Export capabilities"],
    },
    {
      title: "Customer Churn Prediction Model",
      description: "Machine learning model using logistic regression to predict customer attrition with high accuracy and actionable insights.",
      image: mlModel,
      category: "Machine Learning",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Jupyter"],
      github: "https://github.com/Ashwani1456",
      demo: "#",
      features: ["Predictive modeling", "Feature engineering", "Model evaluation", "Business insights"],
    },
    {
      title: "Air Canvas Application",
      description: "Innovative gesture-based drawing tool using computer vision to enable drawing in the air with hand movements.",
      image: mlModel,
      category: "Machine Learning",
      tech: ["Python", "OpenCV", "NumPy", "MediaPipe"],
      github: "https://github.com/Ashwani1456",
      demo: "#",
      features: ["Hand tracking", "Real-time processing", "Multiple colors", "Save functionality"],
    },
    {
      title: "Generative AI Research",
      description: "Award-winning research paper on Generative AI for Sustainable Future, exploring innovative applications in environmental solutions.",
      image: dataDashboard,
      category: "Research",
      tech: ["Python", "TensorFlow", "Research", "Documentation"],
      github: "https://github.com/Ashwani1456",
      demo: "#",
      features: ["Original research", "AI applications", "Sustainability focus", "Academic publication"],
    },
  ];

  const categories = ["All", "Web Development", "Data Analytics", "Machine Learning", "Research"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-section-bg relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/2 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/2 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Floating project icons */}
        <div className="absolute top-1/5 right-1/6 animate-float">
          <GitBranch className="w-8 h-8 text-primary/10" />
        </div>
        <div className="absolute bottom-1/4 left-1/5 animate-float-delayed">
          <Star className="w-6 h-6 text-accent/10" />
        </div>
        <div className="absolute top-2/3 right-1/3 animate-float-delayed-2">
          <Zap className="w-7 h-7 text-secondary/10" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-200"></div>
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              My <span className="text-gradient">Portfolio</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my projects spanning data analytics, web development, 
            and machine learning solutions that solve real-world problems.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={activeFilter === category ? "cta" : "outline"}
              onClick={() => setActiveFilter(category)}
              className="transition-all duration-300 hover:scale-105 hover:shadow-lg relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {activeFilter === category && (
                <div className="absolute inset-0 bg-gradient-primary rounded-lg blur-sm opacity-30"></div>
              )}
              <span className="relative">{category}</span>
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index}
              data-project-card
              data-project-index={index}
              className={`card-shadow hover:shadow-glow transition-all duration-700 hover:-translate-y-4 group overflow-hidden border-0 relative ${
                visibleProjects.includes(index) ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] rounded-lg bg-card"></div>
              
              <div className="relative overflow-hidden">
                <div className="relative group/image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-125 group-hover:brightness-110"
                  />
                  
                  {/* Enhanced overlay with blur effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute inset-0 backdrop-blur-sm"></div>
                  </div>
                  
                  {/* Action buttons with enhanced styling */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center space-x-4">
                    <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transform hover:scale-110 transition-all" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={20} className="text-white" />
                      </a>
                    </Button>
                    <Button size="icon" variant="secondary" className="bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transform hover:scale-110 transition-all" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Eye size={20} className="text-white" />
                      </a>
                    </Button>
                  </div>
                  
                  {/* Project status indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                      Live
                    </Badge>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4 relative">
                <div className="flex justify-between items-start mb-3">
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 group-hover:bg-primary/20 transition-colors">
                    {project.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="w-3 h-3 fill-current text-yellow-500" />
                    <span>Featured</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-display group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4 relative">
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {project.description}
                </p>

                {/* Features with enhanced styling */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <h4 className="font-semibold text-sm text-gradient">Key Features:</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center transition-all duration-300 hover:text-primary hover:translate-x-1">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 animate-pulse" style={{ animationDelay: `${featureIndex * 200}ms` }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack with enhanced badges */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <GitBranch className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium text-secondary">Tech Stack</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary/20 hover:text-primary transition-all cursor-default"
                        style={{ animationDelay: `${techIndex * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Enhanced Action Buttons */}
                <div className="flex space-x-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn hover:bg-primary/10 hover:border-primary/30 transition-all duration-300" 
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2 group-hover/btn:animate-pulse" />
                      <span className="group-hover/btn:text-primary transition-colors">Code</span>
                    </a>
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm" 
                    className="flex-1 group/btn hover:bg-secondary/20 hover:text-secondary transition-all duration-300" 
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Eye size={16} className="mr-2 group-hover/btn:animate-pulse" />
                      <span className="group-hover/btn:text-secondary transition-colors">Live Demo</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;