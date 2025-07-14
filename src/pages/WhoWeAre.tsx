
import { ArrowRight, Users, MapPin, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Your Partner in <span className="text-orange-500">Data Intelligence</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Based in Port Harcourt, Drilledg Resources integrates technology, data science, 
                and operational expertise to drive measurable impact for oil and gas operators.
              </p>
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link to="/our-vision">
                  Our Vision <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3" 
                  alt="Modern office building"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Drilledg Resources</h2>
            <p className="text-xl text-gray-400">Our commitment to excellence drives everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Our team combines decades of oil & gas experience with cutting-edge data science expertise.
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Local Presence</h3>
              <p className="text-gray-300">
                Based in Port Harcourt, we understand the unique challenges of the Nigerian energy sector.
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">
                Track record of delivering measurable improvements in operational performance and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Approach</h2>
            <p className="text-xl text-gray-400">How we deliver value to your organization</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Assess</h3>
              <p className="text-gray-400">Evaluate your current data landscape and identify opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Design</h3>
              <p className="text-gray-400">Create tailored solutions that align with your business objectives</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Implement</h3>
              <p className="text-gray-400">Deploy solutions with minimal disruption to operations</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Optimize</h3>
              <p className="text-gray-400">Continuously improve performance and deliver ongoing value</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
