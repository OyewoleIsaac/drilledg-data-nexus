
import { Cpu, Database, Shield, Cloud } from "lucide-react";

const TechnologyStack = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Built on <span className="text-orange-500">Robust</span>, Secure Technologies
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Leveraging industry-leading platforms for data storage, security, processing, and analytics.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Cloud className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300">AWS, Azure, Google Cloud</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Database className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Storage</h3>
              <p className="text-gray-300">MongoDB, PostgreSQL, InfluxDB</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Processing</h3>
              <p className="text-gray-300">Apache Kafka, Spark, Python</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Security</h3>
              <p className="text-gray-300">ISO 27001, SOC 2, Encryption</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyStack;
