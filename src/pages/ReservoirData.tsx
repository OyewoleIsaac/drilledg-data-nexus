
import { Layers } from "lucide-react";

const ReservoirData = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mr-4">
              <Layers className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Deeper <span className="text-orange-500">Subsurface</span> Insights
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Integrated seismic, geological, and petrophysical data management to support 
            superior reservoir characterisation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReservoirData;
