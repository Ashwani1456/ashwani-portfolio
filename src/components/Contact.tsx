import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  Download,
  MessageSquare,
  Sparkles,
  Globe
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "ashwani.chauhan366@gmail.com",
      href: "mailto:ashwani.chauhan366@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91-8840073762",
      href: "tel:+918840073762",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Kanpur, Uttar Pradesh, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ashwani-singh-7b8a9228b/",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/Ashwani1456",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent Successfully! ✨",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/3 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/3 rounded-full blur-xl animate-pulse delay-1000"></div>
        
        {/* Communication themed floating icons */}
        <div className="absolute top-1/6 right-1/5 animate-float">
          <MessageSquare className="w-8 h-8 text-primary/10" />
        </div>
        <div className="absolute bottom-1/3 left-1/6 animate-float-delayed">
          <Globe className="w-6 h-6 text-secondary/10" />
        </div>
        <div className="absolute top-2/3 right-1/4 animate-float-delayed-2">
          <Sparkles className="w-7 h-7 text-accent/10" />
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
              Get In <span className="text-gradient">Touch</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how I can help you 
            transform your ideas into powerful data-driven solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="card-shadow hover:shadow-glow transition-all duration-500 group relative overflow-hidden">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] rounded-lg bg-card"></div>
              
              <CardHeader className="relative">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-gradient transition-all">Contact Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 group/item"
                  >
                    <div className="bg-primary/10 p-3 rounded-xl group-hover/item:bg-primary/20 group-hover/item:scale-110 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors group-hover/item:text-primary font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-shadow hover:shadow-glow transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-lg bg-gradient-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] rounded-lg bg-card"></div>
              
              <CardHeader className="relative">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-gradient transition-all">Follow Me</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-secondary/10 transition-all duration-300 group/social transform hover:scale-105"
                  >
                    <div className="bg-secondary/10 p-3 rounded-xl group-hover/social:bg-secondary/20 group-hover/social:scale-110 transition-all duration-300">
                      {link.icon}
                    </div>
                    <span className="font-medium group-hover/social:text-secondary transition-colors">{link.label}</span>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Download CV Button */}
            <Button 
              variant="cta" 
              size="lg" 
              className="w-full group/cv relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover/cv:opacity-20 transition-opacity"></div>
              <Download className="mr-2 group-hover/cv:animate-bounce" />
              <span className="relative">Download CV</span>
            </Button>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-shadow hover:shadow-glow transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 rounded-lg bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-[1px] rounded-lg bg-card"></div>
              
              <CardHeader className="relative">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-gradient transition-all">Send Me a Message</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label 
                        htmlFor="name" 
                        className={`transition-colors ${focusedField === 'name' ? 'text-primary' : ''}`}
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your full name"
                        className="transition-all duration-300 focus:border-primary/50 focus:shadow-lg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label 
                        htmlFor="email"
                        className={`transition-colors ${focusedField === 'email' ? 'text-primary' : ''}`}
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="your.email@example.com"
                        className="transition-all duration-300 focus:border-primary/50 focus:shadow-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label 
                      htmlFor="subject"
                      className={`transition-colors ${focusedField === 'subject' ? 'text-primary' : ''}`}
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="What's this about?"
                      className="transition-all duration-300 focus:border-primary/50 focus:shadow-lg"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label 
                      htmlFor="message"
                      className={`transition-colors ${focusedField === 'message' ? 'text-primary' : ''}`}
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="transition-all duration-300 focus:border-primary/50 focus:shadow-lg resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="cta" 
                    size="lg" 
                    className="w-full group/submit relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="mr-2 w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 group-hover/submit:animate-pulse" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;