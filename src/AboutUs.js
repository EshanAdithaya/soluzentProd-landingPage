import React from 'react';
import { Users, Building, Award, Cpu, Check, ArrowUpRight, MapPin, Github, Linkedin, Mail } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '200+', label: 'Projects Delivered' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '4', label: 'Global Offices' }
  ];

  const teamMembers = [
    {
      name: 'David Chen',
      role: 'CEO & Lead Architect',
      image: '/api/placeholder/200/200',
      bio: '15+ years in enterprise software architecture. Previously at Microsoft and Amazon.',
      social: {
        linkedin: '#',
        github: '#',
        email: 'david@lexinnovation.com'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/api/placeholder/200/200',
      bio: 'ML/AI expert with PhD in Computer Science. Led AI initiatives at Google.',
      social: {
        linkedin: '#',
        github: '#',
        email: 'sarah@lexinnovation.com'
      }
    },
    {
      name: 'Michael Zhang',
      role: 'Head of Cloud Infrastructure',
      image: '/api/placeholder/200/200',
      bio: 'Cloud architecture specialist. AWS Certified Solutions Architect.',
      social: {
        linkedin: '#',
        github: '#',
        email: 'michael@lexinnovation.com'
      }
    },
    {
      name: 'Emma Wilson',
      role: 'Lead Product Designer',
      image: '/api/placeholder/200/200',
      bio: 'UX/UI expert with focus on enterprise software design.',
      social: {
        linkedin: '#',
        github: '#',
        email: 'emma@lexinnovation.com'
      }
    }
  ];

  const partners = [
    {
      name: 'Microsoft',
      category: 'Cloud Partner',
      logo: '/api/placeholder/120/60',
      description: 'Azure Cloud Services Partner',
      partnership_level: 'Gold Partner'
    },
    {
      name: 'AWS',
      category: 'Infrastructure Partner',
      logo: '/api/placeholder/120/60',
      description: 'Advanced Consulting Partner',
      partnership_level: 'Premier'
    },
    {
      name: 'IBM',
      category: 'AI Solutions',
      logo: '/api/placeholder/120/60',
      description: 'Watson AI Implementation Partner',
      partnership_level: 'Platinum'
    },
    {
      name: 'Salesforce',
      category: 'CRM Integration',
      logo: '/api/placeholder/120/60',
      description: 'Implementation Partner',
      partnership_level: 'Gold'
    }
  ];

  const clients = [
    {
      name: 'Global Bank Corp',
      industry: 'Finance',
      logo: '/api/placeholder/120/60',
      project: 'Digital Banking Platform',
      testimonial: 'Transformed our digital banking infrastructure with cutting-edge security.',
      results: '+45% efficiency'
    },
    {
      name: 'TechCorp Systems',
      industry: 'Technology',
      logo: '/api/placeholder/120/60',
      project: 'AI-Powered Analytics',
      testimonial: 'Revolutionized our data analytics capabilities.',
      results: '3x faster insights'
    },
    {
      name: 'MediHealth',
      industry: 'Healthcare',
      logo: '/api/placeholder/120/60',
      project: 'Patient Management System',
      testimonial: 'Streamlined patient care with innovative solutions.',
      results: '-30% waiting time'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      country: 'USA',
      address: '123 Tech Street, SF, CA 94105',
      team: '45+ employees'
    },
    {
      city: 'London',
      country: 'UK',
      address: '456 Innovation Ave, London EC2A 2BB',
      team: '30+ employees'
    },
    {
      city: 'Singapore',
      country: 'Singapore',
      address: '789 Digital Way, #12-34',
      team: '25+ employees'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Driving Innovation Through
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Technology Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              A global team of innovators, technologists, and problem-solvers dedicated to transforming businesses through technology.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Meet Our Leadership Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

                <div className="flex gap-4">
                  <a href={member.social.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Strategic Partners
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-blue-400 text-sm mb-2">{partner.category}</p>
                <p className="text-gray-400 text-sm">{partner.description}</p>
                <div className="mt-4 inline-block px-3 py-1 bg-blue-900/20 rounded-full text-sm text-blue-400">
                  {partner.partnership_level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Clients
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 mb-4"
                />
                <div className="text-sm text-blue-400 mb-2">{client.industry}</div>
                <h3 className="text-xl font-bold mb-2">{client.name}</h3>
                <p className="text-gray-400 mb-4">{client.project}</p>
                <blockquote className="text-sm text-gray-300 italic mb-4">
                  "{client.testimonial}"
                </blockquote>
                <div className="text-green-400 font-bold">{client.results}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Global Presence
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6">
                <MapPin className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                <p className="text-gray-400 mb-2">{office.country}</p>
                <p className="text-sm text-gray-400 mb-4">{office.address}</p>
                <div className="text-blue-400">{office.team}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and experience the power of innovative technology solutions.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Contact Us Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;