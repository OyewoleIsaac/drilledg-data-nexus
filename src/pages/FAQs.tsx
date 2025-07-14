
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQs = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "How secure is our data with Drilledg Resources?",
      answer: "We implement enterprise-grade security measures including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with international data protection standards. Your data is stored in secure, redundant cloud infrastructure with 99.9% uptime guarantee."
    },
    {
      question: "What are typical implementation timelines for your solutions?",
      answer: "Implementation timelines vary based on project scope and complexity. Simple data acquisition projects can be deployed in 2-4 weeks, while comprehensive data management systems typically require 8-16 weeks. We provide detailed project timelines during the consultation phase."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes, we offer comprehensive support packages including 24/7 monitoring, regular maintenance, user training, and system updates. Our support team includes certified engineers with deep oil & gas industry experience."
    },
    {
      question: "How compatible are your solutions with existing systems?",
      answer: "Our solutions are designed for seamless integration with existing SCADA systems, historians, and enterprise software. We support industry-standard protocols including Modbus, OPC, MQTT, and can develop custom interfaces as needed."
    },
    {
      question: "What is your pricing approach?",
      answer: "We offer flexible pricing models including project-based implementation fees and ongoing subscription services. Pricing is customized based on your specific requirements, data volumes, and desired service levels. Contact us for a detailed quote tailored to your needs."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
            Your Questions <span className="text-orange-500">Answered</span>
          </h1>
          <p className="text-xl text-gray-300 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Find answers to common questions about our data management solutions and services.
          </p>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-slate-700/50 rounded-lg overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-700/70 transition-colors"
                >
                  <h3 className="text-xl font-bold text-white pr-8">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-6 w-6 text-orange-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-orange-500 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our team is ready to provide detailed answers about your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Contact Our Experts
            </button>
            <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
