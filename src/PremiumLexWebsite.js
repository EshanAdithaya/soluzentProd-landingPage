import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowRight, Phone, Mail, MapPin, Globe, Shield, Cpu, 
  Check, Users, Code, Zap, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';

// Internal Alert Component
const Alert = ({ children, className }) => {
  return (
    <div className={`bg-blue-900/50 border border-blue-500/50 rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

const AlertDescription = ({ children }) => {
  return <div className="text-sm text-gray-300">{children}</div>;
};

const CaseStudyCard = ({ title, description, tech, image }) => {
  return (
    <div className="group relative bg-gradient-to-b from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-400">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span key={index} className="px-3 py-1 bg-blue-600/20 rounded-full text-sm text-blue-400">
              {item}
            </span>
          ))}
        </div>
        
        <button className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
          View Case Study
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

const EnhancedWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isNewsletterSuccess, setIsNewsletterSuccess] = useState(false);

  const handleScroll = useCallback(() => {
    const position = window.scrollY;
    setScrollPosition(position);
    
    const sections = ['home', 'solutions', 'process', 'cases', 'contact'];
    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    
    if (currentSection) setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const solutions = [
    {
      title: "Custom Software Development",
      description: "Tailored solutions that perfectly align with your business needs",
      icon: <Code className="w-12 h-12" />,
      features: ["Microservices Architecture", "Cloud-Native", "CI/CD Integration"]
    },
    {
      title: "Enterprise AI Solutions",
      description: "Harness the power of AI to drive business transformation",
      icon: <Cpu className="w-12 h-12" />,
      features: ["Machine Learning", "NLP", "Predictive Analytics"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern enterprises",
      icon: <Globe className="w-12 h-12" />,
      features: ["Multi-Cloud", "DevOps", "Security First"]
    }
  ];

  const processes = [
    {
      title: "Discovery",
      description: "We dive deep to understand your business needs and objectives",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Design & Architecture",
      description: "Creating scalable solutions with future-proof architecture",
      icon: <Code className="w-8 h-8" />
    },
    {
      title: "Development & Testing",
      description: "Agile development with continuous testing and integration",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Deployment & Support",
      description: "Smooth deployment and ongoing technical support",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const cases = [
    {
      title: "AI-Powered Analytics Platform",
      description: "Helped a Fortune 500 company increase efficiency by 40%",
      tech: ["React", "Python", "AWS", "TensorFlow"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Cloud Migration Project",
      description: "Successful migration of legacy systems to microservices",
      tech: ["Kubernetes", "Docker", "Azure", "Node.js"],
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 ? 'bg-gray-900/90 backdrop-blur-lg py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-12">
              <a href="#home" className="relative group" aria-label="Home">
                <img src="https://pawsome-testing.sgp1.digitaloceanspaces.com/ac121b9e-5ffb-45d3-b26b-0a83cd804ef7-lex__1_-removebg-preview.png" alt="Company Logo" className="h-10 transition-transform duration-300 group-hover:scale-110" />
              </a>
              
              <nav className="hidden md:flex gap-8" aria-label="Main navigation">
                {['Solutions', 'Process', 'Cases', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`relative text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg
                      ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300 hover:text-white'}
                    `}
                  >
                    {item}
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform origin-left transition-transform duration-300
                      ${activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0'}`} 
                    />
                  </a>
                ))}
              </nav>
            </div>
            
            <button 
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 rounded-full
                hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Start Project"
            >
              Start Project
              <ArrowRight className="w-4 h-4" />
            </button>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-gray-900 border-t border-gray-800" role="dialog" aria-label="Mobile menu">
            <div className="px-6 py-4 space-y-4">
              {['Solutions', 'Process', 'Cases', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Start Project
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20" aria-label="Welcome">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Building Tomorrow's
              </span>
              <br />
              Software Today
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Enterprise-grade software solutions that drive innovation and accelerate digital transformation
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-blue-600 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span className="relative z-10 flex items-center gap-2">
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </button>

              <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
                View Case Studies
              </button>

              
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-32 relative" aria-label="Our Solutions">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Enterprise Solutions</h2>
            <p className="text-xl text-gray-400">Transforming businesses through technology</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-b from-gray-900 to-black p-8 rounded-2xl border border-gray-800
                  hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                tabIndex={0}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative space-y-6">
                  <div className="text-blue-400">{solution.icon}</div>
                  <h3 className="text-2xl font-bold">{solution.title}</h3>
                  <p className="text-gray-400">{solution.description}</p>
                  
                  <div className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                        <Check className="w-4 h-4 text-blue-400" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2">
                    Learn more 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-gradient-to-b from-gray-900 to-black" aria-label="Our Process">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-gray-400">A proven approach to software development</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center">
                    {process.icon}
                  </div>
                  <h3 className="text-xl font-bold">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                </div>
                {index < processes.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="cases" className="py-32" aria-label="Case Studies">
 <div className="container mx-auto px-6">
   <div className="text-center mb-20">
     <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
     <p className="text-xl text-gray-400">Real results for real businesses</p>
   </div>

   <div className="grid md:grid-cols-2 gap-8 mb-12">
     {cases.map((case_study, index) => (
       <CaseStudyCard key={index} {...case_study} />
     ))}
   </div>

   <div className="flex justify-center">
   <button 
 onClick={() => window.location.href = '/projects'}
 className="flex items-center gap-2 px-8 py-4 bg-transparent border border-blue-500/50 rounded-full hover:bg-blue-500/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
>
 <span className="flex items-center gap-2">
   See Projects
   <ArrowRight className="w-4 h-4" />
 </span>
</button>
   </div>
 </div>
</section>

      {/* // Add this section before the contact section in EnhancedWebsite */}

{/* Client Showcase Section */}
<section className="py-32 bg-gradient-to-b from-gray-900 to-black" aria-label="Our Clients">
  <div className="container mx-auto px-6 items-center">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted By Industry Leaders</h2>
      <p className="text-xl text-gray-400">Delivering excellence to enterprises worldwide</p>
    </div>

    <div className="grid md:grid-cols-6 gap-8 items-center opacity-70">
      
        <img 
          src={`https://pawsome-testing.sgp1.digitaloceanspaces.com/f52624b0-63f3-4c4f-95d3-534e2bc02c20-WhatsApp_Image_2025-01-05_at_22.47.44_427d31e1-removebg-preview.png`}
          alt={`Shradda TV `}
        />
        <img 
          src={`https://soluzent-marketing-devtesting.netlify.app/static/media/logofull.fdf42ac8212d0c2fda0d.png`}
          alt={`Soluzent`}
        />
        <img 
          src={`https://pawsome-testing.sgp1.digitaloceanspaces.com/21a84bff-7755-434c-9277-9564b3efeeff-cryste%202%20new.png`}
          alt={`Soluzent`}
        />
        <img 
          src={`https://scontent.fcmb11-2.fna.fbcdn.net/v/t39.30808-6/419906915_754098016740880_4515120405518843629_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHzc37o3qp-TLn_0pSazQ4O3yKIKPhodmvfIogo-Gh2awCQ84pmxcGs1bGYJCysnDKdxBe5rf3wS3hGVLZBkNq6&_nc_ohc=08AE1gnN1cIQ7kNvgEc6rQC&_nc_zt=23&_nc_ht=scontent.fcmb11-2.fna&_nc_gid=AJ_p9YleO5wi5o60bXgNvn3&oh=00_AYARtYyY72edSbbb96qhSBazM_SyREATUZmagldC472ZZg&oe=67AA083D`}
          alt={`Soluzent`}
        />
        <img 
          src={`https://pawsome-testing.sgp1.digitaloceanspaces.com/480b13a9-47ac-4a3e-8cee-e018495cc56e-logo-removebg-preview.png`}
          alt={`Soluzent`}
        />
        <img 
          src={`https://pawsome-testing.sgp1.digitaloceanspaces.com/ad28dc95-76c0-4f87-9653-282ba749f11c-image-removebg-preview%20%282%29.png`}
          alt={`Soluzent`}
        />
        <img 
          src={`https://ceylon99.com/img/logos/logo-inner.png`}
          alt={`Soluzent`}
        />
      
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative" aria-label="Contact Us">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Start Your Project</h2>
              <p className="text-xl text-gray-400">Let's discuss how we can help transform your business</p>
            </div>

            <form className="mt-12 space-y-8 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full
                  hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>

            {isNewsletterSuccess && (
              <Alert className="mt-4">
                <AlertDescription>
                  Thanks for reaching out! We'll get back to you soon.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800" aria-label="Footer">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <img src="/api/placeholder/40/40" alt="Company Logo" className="h-10" />
              <p className="text-gray-400">Building tomorrow's software solutions with cutting-edge technology and expertise.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                {['Custom Development', 'Enterprise AI', 'Cloud Services', 'DevOps'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2025 Your Company. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnhancedWebsite;