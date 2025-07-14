
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Database, BarChart3, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/90">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>
        </div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Unlocking <span className="text-orange-500">Clarity</span> and <br />
            <span className="text-orange-500">Performance</span> Across Your <br />
            Energy Assets
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Drilledg Resources delivers advanced data management solutions to optimize 
            exploration, production, and asset integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
              <Link to="/contact">
                Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              <Link to="/solutions">
                <Play className="mr-2 h-5 w-5" />
                Explore Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Data Intelligence</h3>
              <p className="text-gray-400">Advanced analytics and AI-driven insights</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Performance Optimization</h3>
              <p className="text-gray-400">Maximize operational efficiency and ROI</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Asset Integrity</h3>
              <p className="text-gray-400">Ensure reliability and safety standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-orange-600/10 to-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Your Partner in <span className="text-orange-500">Data Intelligence</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Based in Port Harcourt, Drilledg Resources integrates technology, data science, 
            and operational expertise to drive measurable impact for oil and gas operators.
          </p>
          <div className="mt-12">
            <Button asChild size="lg" className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              <Link to="/who-we-are">
                Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
