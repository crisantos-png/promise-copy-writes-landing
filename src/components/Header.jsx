
import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Chibuzor <span className="text-blue-600">Promise</span>
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-3">
              <a 
                href="https://www.linkedin.com/in/chibuzor-promise"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:ikennachibuzor50@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 hover:scale-105 transition-all duration-300"
              onClick={() => window.open('mailto:ikennachibuzor50@gmail.com?subject=Project Inquiry', '_blank')}
            >
              Get Started
            </Button>
          </nav>
          
          <div className="md:hidden flex items-center space-x-3">
            <a 
              href="https://www.linkedin.com/in/chibuzor-promise"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 hover:scale-105 transition-all duration-300"
              onClick={() => window.open('mailto:ikennachibuzor50@gmail.com?subject=Project Inquiry', '_blank')}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
