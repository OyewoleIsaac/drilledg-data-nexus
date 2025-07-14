
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { title: "Data Acquisition", path: "/data-acquisition" },
    { title: "Production Data", path: "/production-data" },
    { title: "Reservoir Data", path: "/reservoir-data" },
    { title: "Drilling Data", path: "/drilling-data" },
    { title: "Asset Integrity", path: "/asset-integrity" },
    { title: "AI & Analytics", path: "/ai-analytics" },
    { title: "Regulatory & ESG", path: "/regulatory" },
    { title: "Advisory Services", path: "/advisory" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              <span className="text-orange-500">Drilledg</span> Resources
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-orange-500" : "text-gray-300 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/who-we-are"
              className={`text-sm font-medium transition-colors ${
                isActive("/who-we-are") ? "text-orange-500" : "text-gray-300 hover:text-white"
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-56 bg-slate-800 rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-slate-700 transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/case-studies"
              className={`text-sm font-medium transition-colors ${
                isActive("/case-studies") ? "text-orange-500" : "text-gray-300 hover:text-white"
              }`}
            >
              Case Studies
            </Link>
            <Link
              to="/team"
              className={`text-sm font-medium transition-colors ${
                isActive("/team") ? "text-orange-500" : "text-gray-300 hover:text-white"
              }`}
            >
              Team
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact") ? "text-orange-500" : "text-gray-300 hover:text-white"
              }`}
            >
              Contact
            </Link>
            <Button asChild className="bg-orange-600 hover:bg-orange-700">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-b-lg">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/who-we-are"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/solutions"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link
                to="/case-studies"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
