
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  BarChart3, 
  Layers, 
  Drill, 
  Shield, 
  Brain, 
  FileText, 
  Users,
  ArrowRight 
} from "lucide-react";

const SolutionsOverview = () => {
  const solutions = [
    {
      id: 1,
      title: "Data Acquisition & Conditioning",
      description: "Reliable field data capture and automated conditioning to ensure readiness for real-time operational use.",
      icon: Database,
      path: "/data-acquisition",
      color: "from-blue-600 to-blue-700"
    },
    {
      id: 2,
      title: "Production Data Management",
      description: "Centralised production data management with advanced analytics for optimised field performance.",
      icon: BarChart3,
      path: "/production-data",
      color: "from-green-600 to-green-700"
    },
    {
      id: 3,
      title: "Reservoir Data Management",
      description: "Integrated seismic, geological, and petrophysical data management for superior reservoir characterisation.",
      icon: Layers,
      path: "/reservoir-data",
      color: "from-purple-600 to-purple-700"
    },
    {
      id: 4,
      title: "Drilling Data Optimisation",
      description: "Real-time drilling data analytics and optimisation to reduce NPT and drilling costs.",
      icon: Drill,
      path: "/drilling-data",
      color: "from-orange-600 to-orange-700"
    },
    {
      id: 5,
      title: "Asset Integrity Data Systems",
      description: "Condition-based monitoring and predictive analytics for proactive asset integrity management.",
      icon: Shield,
      path: "/asset-integrity",
      color: "from-red-600 to-red-700"
    },
    {
      id: 6,
      title: "AI & Advanced Analytics",
      description: "Deploy AI models and machine learning analytics to uncover hidden patterns and drive operational excellence.",
      icon: Brain,
      path: "/ai-analytics",
      color: "from-cyan-600 to-cyan-700"
    },
    {
      id: 7,
      title: "Regulatory & ESG Data Reporting",
      description: "Automated data aggregation and reporting to meet regulatory and ESG requirements efficiently.",
      icon: FileText,
      path: "/regulatory",
      color: "from-indigo-600 to-indigo-700"
    },
    {
      id: 8,
      title: "Advisory & Integration Services",
      description: "Strategic advisory to design data architecture and integrate systems for maximum ROI.",
      icon: Users,
      path: "/advisory",
      color: "from-pink-600 to-pink-700"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
            Comprehensive <span className="text-orange-500">Data Management</span> Services
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            From data acquisition to advanced analytics, we provide end-to-end solutions 
            that transform your energy operations.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div 
                  key={solution.id}
                  className="bg-slate-700/50 rounded-lg p-8 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <Button asChild variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                    <Link to={solution.path}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Approach */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Integrated Approach</h2>
            <p className="text-xl text-gray-400">Our solutions work together to create a unified data ecosystem</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Collect</h3>
              <p className="text-gray-300">
                Gather data from multiple sources with our advanced acquisition systems
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Analyze</h3>
              <p className="text-gray-300">
                Apply AI and machine learning to extract meaningful insights from your data
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Optimize</h3>
              <p className="text-gray-300">
                Implement data-driven optimizations to improve performance and reduce costs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600/10 to-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to See Our Solutions in Action?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our detailed service descriptions or contact us for a customized consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link to="/contact">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
              <Link to="/case-studies">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsOverview;
