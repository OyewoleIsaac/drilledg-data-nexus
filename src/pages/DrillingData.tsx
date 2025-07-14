
import { Drill } from "lucide-react";

const DrillingData = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mr-4">
              <Drill className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Smarter <span className="text-orange-500">Drilling</span> Decisions
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Real-time drilling data analytics and optimisation to reduce NPT and drilling costs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DrillingData;
