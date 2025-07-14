
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll be in touch within 24 hours.",
    });
    setFormData({
      name: "",
      company: "",
      role: "",
      email: "",
      phone: "",
      interest: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
              Begin Your <span className="text-orange-500">Data Advantage</span> Journey
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Ready to transform your energy operations with advanced data management? 
              Let's discuss your specific challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company *</label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      required
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Role</label>
                    <Input
                      type="text"
                      value={formData.role}
                      onChange={(e) => handleInputChange("role", e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Area of Interest</label>
                    <Select onValueChange={(value) => handleInputChange("interest", value)}>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                        <SelectValue placeholder="Select an area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="data-acquisition">Data Acquisition</SelectItem>
                        <SelectItem value="production-management">Production Management</SelectItem>
                        <SelectItem value="reservoir-management">Reservoir Management</SelectItem>
                        <SelectItem value="drilling-optimization">Drilling Optimization</SelectItem>
                        <SelectItem value="asset-integrity">Asset Integrity</SelectItem>
                        <SelectItem value="ai-analytics">AI & Analytics</SelectItem>
                        <SelectItem value="regulatory-esg">Regulatory & ESG</SelectItem>
                        <SelectItem value="advisory">Advisory Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={6}
                    className="bg-slate-700 border-slate-600 text-white"
                    placeholder="Tell us about your specific challenges and requirements..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Our Office</h3>
                    <p className="text-gray-300">
                      123 Trans Amadi Industrial Layout<br />
                      Port Harcourt, Rivers State<br />
                      Nigeria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">(+234) 706 906 3791</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-300">info@drilledgeresources.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                    <p className="text-gray-300">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Nigeria Map */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-white mb-4">Location Map</h3>
                <div className="w-full h-64 bg-slate-700 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4074516.4292793064!2d5.9609239073242185!4d9.072264315301247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2s!4v1642089731777!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Nigeria Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
