
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Drilledg<span className="text-orange-500">e</span> Resources
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advanced data management solutions to optimize exploration, production, and asset integrity for energy companies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/who-we-are" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Who We Are</Link></li>
              <li><Link to="/our-vision" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Our Vision</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Solutions</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Our Team</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Case Studies</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/data-acquisition" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Data Acquisition</Link></li>
              <li><Link to="/production-data" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Production Data</Link></li>
              <li><Link to="/ai-analytics" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">AI & Analytics</Link></li>
              <li><Link to="/asset-integrity" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Asset Integrity</Link></li>
              <li><Link to="/advisory" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Advisory Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-400 text-sm">
                  123 Trans Amadi Industrial Layout<br />
                  Port Harcourt, Rivers State<br />
                  Nigeria
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <a href="tel:+2347069063791" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  (+234) 706 906 3791
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@drilledgeresources.com" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
                  info@drilledgeresources.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Drilledge Resources. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/faqs" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/faqs" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
