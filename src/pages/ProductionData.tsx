
import { BarChart3, ArrowRight, TrendingUp, Activity, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductionData = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mr-4">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                  Maximize <span className="text-orange-500">Production</span> Efficiency
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Centralised production data management with advanced analytics for 
                optimised field performance.
              </p>
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-slate-700/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white mb-6">Production KPIs Dashboard</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TrendingUp className="h-6 w-6 text-green-500 mr-3" />
                      <span className="text-gray-300">Oil Production Rate</span>
                    </div>
                    <span className="text-2xl font-bold text-green-500">12,450 bpd</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Activity className="h-6 w-6 text-blue-500 mr-3" />
                      <span className="text-gray-300">Gas Production Rate</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-500">45.2 MMscfd</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Gauge className="h-6 w-6 text-orange-500 mr-3" />
                      <span className="text-gray-300">Well Efficiency</span>
                    </div>
                    <span className="text-2xl font-bold text-orange-500">94.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Production Optimization Features</h2>
            <p className="text-xl text-gray-400">Comprehensive tools for production management</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Real-time Monitoring</h3>
              <p className="text-gray-300">
                Continuous monitoring of production rates, pressures, and temperatures across all wells
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Performance Analytics</h3>
              <p className="text-gray-300">
                Advanced analytics to identify optimization opportunities and performance trends
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Automated Reporting</h3>
              <p className="text-gray-300">
                Automated generation of production reports and regulatory compliance documentation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductionData;
