import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [scrollPosition, setScrollPosition] = useState(0);
 const [activeSection, setActiveSection] = useState('home');
 const navigate = useNavigate();

 const handleScroll = useCallback(() => {
   setScrollPosition(window.scrollY);
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

 const navItems = ['Solutions', 'Process', 'Cases', 'Contact'];

 const NavLink = ({ item }) => (
   
     href={`#${item.toLowerCase()}`}
     className={`relative text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg
       ${activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
   >
     {item}
     <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 transform origin-left transition-transform duration-300
       ${activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0'}`} 
     />
   </a>
 );

 return (
   <nav className={`fixed w-full z-50 transition-all duration-300 ${
     scrollPosition > 50 ? 'bg-gray-900/90 backdrop-blur-lg py-4' : 'bg-transparent py-6'
   }`}>
     <div className="container mx-auto px-6">
       <div className="flex justify-between items-center">
         <div className="flex items-center gap-12">
           <a href="#home" className="relative group" aria-label="Home">
             <img src="/api/placeholder/40/40" alt="Company Logo" className="h-10 transition-transform duration-300 group-hover:scale-110" />
           </a>
           
           <nav className="hidden md:flex gap-8" aria-label="Main navigation">
             {navItems.map(item => <NavLink key={item} item={item} />)}
           </nav>
         </div>
         
         <button 
           onClick={() => navigate('/contact')}
           className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-2 rounded-full
             hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
           {navItems.map(item => (
             
               key={item}
               href={`#${item.toLowerCase()}`}
               className="block text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2"
               onClick={() => setIsMenuOpen(false)}
             >
               {item}
             </a>
           ))}
           <button 
             onClick={() => navigate('/contact')}
             className="w-full bg-blue-600 px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
           >
             Start Project
           </button>
         </div>
       </div>
     )}
   </nav>
 );
};

export default Navigation;