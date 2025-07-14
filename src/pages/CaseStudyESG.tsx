
import { FileText, CheckCircle } from "lucide-react";

const CaseStudyESG = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center mr-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-white">
              Compliance Reporting Time <span className="text-orange-500">Reduced by 60%</span>
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
                Manual ESG reporting processes taking weeks to complete, with high risk 
                of errors and compliance issues.
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Solution</h3>
              <p className="text-gray-300">
                Automated data aggregation system with intelligent reporting workflows 
                and regulatory compliance templates.
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Result</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-300">60% time reduction</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-300">95% accuracy improvement</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-300">Zero compliance issues</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyESG;
