import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Ashwani Singh",
          "jobTitle": "Data Analyst and Software Developer",
          "description": "Expert in data analytics, machine learning, and full-stack web development",
          "url": "https://ashwanisingh.com",
          "sameAs": [
            "https://www.linkedin.com/in/ashwani-singh-7b8a9228b/",
            "https://github.com/Ashwani1456"
          ],
          "knowsAbout": ["Data Analytics", "Machine Learning", "Django", "React", "Python", "Web Development"],
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Career Point University"
          }
        })}
      </script>

      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
