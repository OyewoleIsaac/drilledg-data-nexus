
import { BookOpen, Video, FileText } from "lucide-react";

const Insights = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Stay Ahead with <span className="text-orange-500">Drilledg</span> Insights
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Access whitepapers, blogs, and webinars on data management and oil & gas technology trends.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Whitepapers</h3>
              <p className="text-gray-300 mb-6">
                In-depth technical papers on data management best practices and industry innovations.
              </p>
              <button className="text-orange-500 hover:text-orange-400 font-medium">
                Browse Whitepapers →
              </button>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Blog Articles</h3>
              <p className="text-gray-300 mb-6">
                Regular insights on technology trends, case studies, and industry developments.
              </p>
              <button className="text-orange-500 hover:text-orange-400 font-medium">
                Read Latest Posts →
              </button>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mb-6">
                <Video className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Webinars</h3>
              <p className="text-gray-300 mb-6">
                Live and recorded sessions with industry experts on data management topics.
              </p>
              <button className="text-orange-500 hover:text-orange-400 font-medium">
                Watch Webinars →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;
