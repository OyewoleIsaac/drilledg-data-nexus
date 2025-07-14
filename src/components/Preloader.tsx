
import { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3 seconds preloader

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Drilledg<span className="text-orange-500">e</span> Resources
          </h1>
          <p className="text-gray-400">Data Management for Oil & Gas</p>
        </div>
        <div className="flex items-center justify-center">
          <Loader className="h-8 w-8 text-orange-500 animate-spin mr-2" />
          <span className="text-white">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
