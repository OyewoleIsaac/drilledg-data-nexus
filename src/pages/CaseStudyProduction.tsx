
import { TrendingUp, CheckCircle } from "lucide-react";

const CaseStudyProduction = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mr-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white">
              15% Production Increase for <span className="text-orange-500">Offshore Operator</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-slate-700/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Challenge</h3>
              <p className="text-gray-300">
                Offshore operator experiencing production inefficiencies due to fragmented 
                data systems and lack of real-time visibility into well performance.
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Solution</h3>
              <p className="text-gray-300">
                Implemented integrated production data management system with real-time 
                analytics and automated optimization algorithms.
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Result</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-300">15% production increase</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-300">$2.3M annual savings</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-300">20% reduction in downtime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyProduction;
