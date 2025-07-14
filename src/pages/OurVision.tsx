
import { Target, TrendingUp, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const OurVision = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
            Driving Energy <span className="text-orange-500">Transformation</span> Through Data
          </h1>
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            To empower energy companies with data systems that enhance operational decisions, 
            minimise downtime, and improve profitability.
          </p>
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Link to="/solutions">
              Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Vision Pillars</h2>
            <p className="text-xl text-gray-400">The foundation of our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Precision</h3>
              <p className="text-gray-300">
                Delivering accurate, reliable data solutions that enable confident decision-making.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Growth</h3>
              <p className="text-gray-300">
                Driving sustainable growth through optimized operations and enhanced efficiency.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Safety</h3>
              <p className="text-gray-300">
                Ensuring operational safety through predictive analytics and proactive monitoring.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sustainability</h3>
              <p className="text-gray-300">
                Supporting environmental stewardship through comprehensive ESG data management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Future We're Building */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                The Future We're Building
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  We envision a future where every energy company has access to intelligent, 
                  integrated data systems that transform raw information into actionable insights.
                </p>
                <p className="text-lg">
                  Our goal is to be the trusted partner that bridges the gap between traditional 
                  energy operations and the digital transformation that drives tomorrow's success.
                </p>
                <p className="text-lg">
                  Through continuous innovation and deep industry expertise, we're building 
                  solutions that don't just solve today's challenges but anticipate tomorrow's opportunities.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-transparent rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3" 
                alt="Technology and data visualization"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600/10 to-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our vision aligns with your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link to="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              <Link to="/solutions">
                View Our Solutions
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVision;
