import React, { useState } from 'react';
import { ArrowRight, Github, ExternalLink, Code, Database, Cloud, Lock, Search, Monitor } from 'lucide-react';

const ProjectShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'cloud', label: 'Cloud Solutions' },
    { id: 'security', label: 'Security' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Enterprise Resource Management',
      description: 'Cloud-based ERP system with real-time analytics and AI-powered forecasting',
      image: '/api/placeholder/600/400',
      category: ['web', 'ai'],
      tech: ['React', 'Node.js', 'TensorFlow', 'AWS'],
      features: [
        'Real-time data processing',
        'AI-powered forecasting',
        'Multi-tenant architecture',
        'Advanced analytics dashboard'
      ],
      results: {
        efficiency: '+45%',
        cost: '-30%',
        users: '10,000+'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 2,
      title: 'Secure Banking Platform',
      description: 'Zero-trust banking infrastructure with blockchain integration',
      image: '/api/placeholder/600/400',
      category: ['security', 'cloud'],
      tech: ['Go', 'Kubernetes', 'Azure', 'Hyperledger'],
      features: [
        'Zero-trust architecture',
        'Real-time fraud detection',
        'Multi-region deployment',
        'Regulatory compliance'
      ],
      results: {
        security: '99.99%',
        uptime: '99.999%',
        transactions: '1M+/day'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    },
    {
      id: 3,
      title: 'AI-Powered Supply Chain',
      description: 'Predictive supply chain optimization using advanced ML models',
      image: '/api/placeholder/600/400',
      category: ['ai', 'cloud'],
      tech: ['Python', 'PyTorch', 'GCP', 'MongoDB'],
      features: [
        'Demand forecasting',
        'Route optimization',
        'Inventory management',
        'Supplier analytics'
      ],
      results: {
        accuracy: '94%',
        savings: '$2.5M',
        efficiency: '+60%'
      },
      links: {
        case_study: '#',
        github: '#',
        live: '#'
      }
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  const CategoryIcon = ({ category }) => {
    switch(category) {
      case 'web': return <Monitor className="w-5 h-5" />;
      case 'ai': return <Database className="w-5 h-5" />;
      case 'cloud': return <Cloud className="w-5 h-5" />;
      case 'security': return <Lock className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Latest{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations with cutting-edge technology solutions
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full border transition-all duration-300
                ${activeFilter === filter.id 
                  ? 'bg-blue-600 border-blue-500 text-white' 
                  : 'border-gray-700 text-gray-400 hover:border-blue-500 hover:text-white'}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="group bg-gradient-to-b from-gray-900 to-black rounded-2xl border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
              {/* Project Image */}
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.category.map(cat => (
                    <span key={cat} className="flex items-center gap-1 text-sm text-blue-400 bg-blue-900/20 px-3 py-1 rounded-full">
                      <CategoryIcon category={cat} />
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </span>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-300">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Results */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-800">
                  {Object.entries(project.results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-blue-400">{value}</div>
                      <div className="text-sm text-gray-400">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800">
                  <a 
                    href={project.links.case_study}
                    className="flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Search className="w-4 h-4" />
                    Case Study
                  </a>
                  <a 
                    href={project.links.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.links.live}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;