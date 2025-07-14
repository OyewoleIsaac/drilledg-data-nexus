
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TrendingUp, FileText, ArrowRight } from "lucide-react";

const CaseStudiesOverview = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Proven <span className="text-orange-500">Results</span> Across Operations
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Explore our case studies demonstrating measurable impact in production optimization, 
            ESG compliance, and drilling efficiency.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                15% Production Increase for Offshore Operator
              </h3>
              <p className="text-gray-300 mb-6">
                How our integrated data management system helped optimize production 
                and reduce operational costs for a major offshore operator.
              </p>
              <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                <Link to="/case-study-production">
                  Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Compliance Reporting Time Reduced by 60%
              </h3>
              <p className="text-gray-300 mb-6">
                Streamlining ESG and regulatory reporting through automated data 
                aggregation and intelligent reporting workflows.
              </p>
              <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                <Link to="/case-study-esg">
                  Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesOverview;
