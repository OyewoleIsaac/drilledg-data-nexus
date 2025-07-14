
import { Brain } from "lucide-react";

const AIAnalytics = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-full flex items-center justify-center mr-4">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Transform <span className="text-orange-500">Data</span> into Action
            </h1>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Deploy AI models and machine learning analytics to uncover hidden patterns and drive operational excellence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AIAnalytics;
