
import { Database, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DataAcquisition = () => {
  const features = [
    "Real-time field data capture from multiple sensor types",
    "Automated data validation and quality control",
    "Edge computing capabilities for remote locations",
    "Seamless integration with existing SCADA systems",
    "Data conditioning and preprocessing",
    "Secure data transmission and storage"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                  Capture. <span className="text-orange-500">Cleanse.</span> Convert.
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Reliable field data capture and automated conditioning to ensure readiness 
                for real-time operational use.
              </p>
              <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3" 
                  alt="Data acquisition system"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Data Flow Architecture</h2>
            <p className="text-xl text-gray-400">From field sensors to actionable dashboards</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-bold text-white">FIELD</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sensors</h3>
              <p className="text-gray-300">
                Multiple sensor types capturing pressure, temperature, flow, and other critical parameters
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-bold text-white">HUB</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Hub</h3>
              <p className="text-gray-300">
                Centralized collection, validation, and conditioning of all field data streams
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-lg font-bold text-white">DASH</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Dashboard</h3>
              <p className="text-gray-300">
                Real-time visualization and analytics for immediate operational insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Key Capabilities</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Technical Specifications</h3>
              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between border-b border-slate-600 pb-2">
                  <span>Data Sampling Rate</span>
                  <span className="text-orange-500">Up to 1000 Hz</span>
                </div>
                <div className="flex justify-between border-b border-slate-600 pb-2">
                  <span>Supported Protocols</span>
                  <span className="text-orange-500">Modbus, OPC, MQTT</span>
                </div>
                <div className="flex justify-between border-b border-slate-600 pb-2">
                  <span>Data Accuracy</span>
                  <span className="text-orange-500">99.5%+</span>
                </div>
                <div className="flex justify-between border-b border-slate-600 pb-2">
                  <span>Storage Capacity</span>
                  <span className="text-orange-500">Unlimited Cloud</span>
                </div>
                <div className="flex justify-between">
                  <span>Latency</span>
                  <span className="text-orange-500">&lt; 100ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAcquisition;
