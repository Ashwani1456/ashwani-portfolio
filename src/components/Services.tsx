import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Code, 
  Brain, 
  Database, 
  Layout, 
  Zap,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield
} from "lucide-react";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-service-card]');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics & Visualization",
      description: "Transform complex data into actionable insights using Power BI, Excel, and Python. Create interactive dashboards and comprehensive reports.",
      features: ["Real-time Analytics", "Custom Dashboards", "Data Mining", "Statistical Analysis"],
      color: "bg-primary/10 text-primary",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Build scalable web applications using Django, React, and modern technologies. Full-stack development with responsive design.",
      features: ["Django Backend", "React Frontend", "REST APIs", "Responsive Design"],
      color: "bg-secondary/10 text-secondary",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning Solutions",
      description: "Develop predictive models and classification systems to solve business problems using advanced ML algorithms.",
      features: ["Predictive Modeling", "Classification", "Data Preprocessing", "Model Optimization"],
      color: "bg-accent/10 text-accent",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "API Development & Integration",
      description: "Design and implement robust APIs for seamless data exchange and system integration across platforms.",
      features: ["REST API Design", "Third-party Integration", "Database Optimization", "Security Implementation"],
      color: "bg-success/10 text-success",
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Dashboard Design",
      description: "Create intuitive and interactive dashboards with real-time data visualization and user-friendly interfaces.",
      features: ["Real-time Updates", "Interactive Charts", "KPI Monitoring", "Custom Widgets"],
      color: "bg-warning/10 text-warning",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Build tailored software solutions to meet specific business requirements with modern technologies.",
      features: ["Custom Applications", "System Integration", "Performance Optimization", "Maintenance & Support"],
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* AI-themed background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-40 h-40 bg-primary/3 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/3 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        {/* Floating tech icons */}
        <div className="absolute top-1/6 right-1/4 animate-float">
          <Sparkles className="w-6 h-6 text-primary/10" />
        </div>
        <div className="absolute bottom-1/3 left-1/5 animate-float-delayed">
          <TrendingUp className="w-8 h-8 text-secondary/10" />
        </div>
        <div className="absolute top-2/3 right-1/6 animate-float-delayed-2">
          <Shield className="w-7 h-7 text-accent/10" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-300"></div>
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-600"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions combining data science expertise with full-stack development 
            to deliver impactful results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              data-service-card
              data-index={index}
              className={`card-shadow hover:shadow-glow transition-all duration-700 hover:-translate-y-3 group relative overflow-hidden border-0 ${
                visibleCards.includes(index) ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Gradient background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] rounded-lg bg-card"></div>
              
              <CardHeader className="pb-4 relative">
                <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-125 transition-all duration-500 relative`}>
                  {/* Icon glow effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 relative">
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-sm transition-all duration-300 hover:text-primary"
                      style={{ 
                        transform: hoveredService === index ? `translateX(${featureIndex * 2}px)` : 'translateX(0)',
                        transitionDelay: `${featureIndex * 50}ms`
                      }}
                    >
                      <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 animate-pulse" style={{ animationDelay: `${featureIndex * 200}ms` }}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="w-full group/btn justify-between p-3 h-auto font-medium border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                >
                  <span className="group-hover/btn:text-gradient transition-all">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 group-hover/btn:text-primary transition-all duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;