import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/ashwani-hero.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  Welcome to my Portfolio
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight">
                Hi, I'm{" "}
                <span className="text-gradient">Ashwani Singh</span>
              </h1>
              <p className="text-xl md:text-2xl text-text-light font-medium">
                Transforming Data into Insights | Building Scalable Web Solutions
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Data Analyst and Software Developer with expertise in machine learning, 
                full-stack development, and data visualization. Currently pursuing MCA 
                in Data Science at Career Point University.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="cta"
                size="xl"
                onClick={() => scrollToSection("#portfolio")}
                className="group"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={() => scrollToSection("#contact")}
              >
                <Download className="mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Ashwani1456" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/ashwani-singh-7b8a9228b/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </Button>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Python", "Django", "React", "Machine Learning", "Data Analytics", "SQL"].map((skill) => (
                <span
                  key={skill}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-accent/20 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-white">
                  <img
                    src={heroImage}
                    alt="Ashwani Singh - Data Analyst and Software Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg animate-float">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
                <span className="text-xl">💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;