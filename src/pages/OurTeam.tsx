
import { Users, Award, Briefcase } from "lucide-react";

const OurTeam = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Industry <span className="text-orange-500">Experts</span>. Data Innovators.
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Our team combines decades of oil & gas experience with cutting-edge data science expertise 
            to deliver transformational solutions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-lg text-center hover:bg-slate-700/70 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Leadership Team</h3>
              <p className="text-gray-300">
                Seasoned professionals with 20+ years in oil & gas operations and data management
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-lg text-center hover:bg-slate-700/70 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Experts</h3>
              <p className="text-gray-300">
                Certified engineers and data scientists with deep industry domain knowledge
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-lg text-center hover:bg-slate-700/70 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Briefcase className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Project Managers</h3>
              <p className="text-gray-300">
                Experienced project leaders ensuring on-time, on-budget delivery of solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
