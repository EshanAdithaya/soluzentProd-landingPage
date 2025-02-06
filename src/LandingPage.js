import React, { useState, useEffect } from 'react';
import { MessageSquare, Share2, BarChart2, Clock, Upload, Bot, ArrowUp } from 'lucide-react';

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Show arrow when scrolled past hero section (around 800px)
      setShowScrollTop(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              Soluzent
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('features')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Pricing
              </button>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-8 animate-fade-in">
              Manage All Your Social Media<br />
              <span className="text-blue-600 inline-block animate-float">In One Click</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up">
              Simplify your social media management with Soluzent. Connect multiple platforms, 
              automate posts, and get AI-powered insights - all from a single dashboard.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-blue-50 transform hover:scale-105 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Share2 size={32} />,
                title: "Multi-Platform Integration",
                description: "Connect and manage all your social media accounts from a single dashboard."
              },
              {
                icon: <Upload size={32} />,
                title: "One-Click Publishing",
                description: "Create once, publish everywhere. Schedule and automate posts across platforms."
              },
              {
                icon: <Bot  size={32} />,
                title: "AI-Powered Analytics",
                description: "Get intelligent insights and recommendations to improve your social media strategy."
              },
              {
                icon: <Clock size={32} />,
                title: "Automated Tasks",
                description: "Automate routine social media tasks and save hours of manual work."
              },
              {
                icon: <MessageSquare size={32} />,
                title: "Smart Chat Integration",
                description: "Engage with your audience using AI-enhanced chat capabilities."
              },
              {
                icon: <BarChart2 size={32} />,
                title: "Advanced Reporting",
                description: "Generate comprehensive reports and track your social media performance."
              }
            ].map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="relative bg-white/50 backdrop-blur-sm py-24">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Soluzent?</h2>
            <p className="text-xl text-gray-600">
              Transform your social media management and boost your online presence
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <BenefitSection 
              title="Save Time"
              items={[
                "Automate posting across multiple platforms",
                "Schedule content in advance",
                "Streamline engagement with AI-powered responses"
              ]}
            />
            <BenefitSection 
              title="Improve Results"
              items={[
                "Get AI-powered content recommendations",
                "Track performance with detailed analytics",
                "Optimize your social media strategy"
              ]}
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-blue-600 text-white py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGM5Ljk0MSAwIDE4LTguMDU5IDE4LTE4cy04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNHMxNCA2LjI2OCAxNCAxNHMtNi4yNjggMTQtMTQgMTR6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-10" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Social Media Management?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Join thousands of businesses using Soluzent to streamline their social media presence
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
            Start Your Free Trial
          </button>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 left-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-110 animate-fade-in z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}

    </div>
  );
};

// Feature Card Component with animation
const FeatureCard = ({ icon, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer animate-fade-in-up`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`text-blue-600 mb-4 transform transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Benefit Section Component
const BenefitSection = ({ title, items }) => {
  return (
    <div className="transform hover:scale-105 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600">✓</span>
            </div>
            <p className="ml-3 text-gray-600">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Add these styles to your CSS/Tailwind configuration
const style = document.createElement('style');
style.textContent = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
  
  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fade-in-up 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);

export default LandingPage;