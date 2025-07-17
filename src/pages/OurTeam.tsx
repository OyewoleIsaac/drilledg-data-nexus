
import { Users, Award, Briefcase, Linkedin, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Odeh Augustine Iyeje",
      role: "Data Analyst and Founder",
      initials: "OA",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3",
      description: "Visionary leader with extensive experience in data analytics and oil & gas operations, driving innovation in energy data management solutions."
    },
    {
      name: "Sally Oliver",
      role: "Community Manager and Data Scientist",
      initials: "SO",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3",
      description: "Expert data scientist specializing in community engagement and advanced analytics, bridging technical excellence with stakeholder relationships."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Industry <span className="text-orange-500">Experts</span>. Data Innovators.
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Our team combines decades of oil & gas experience with cutting-edge data science expertise 
            to deliver transformational solutions.
          </p>
        </div>
      </section>

      {/* Team Structure Overview */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-lg text-center hover:bg-slate-700/70 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-orange-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Leadership Team</h3>
              <p className="text-gray-300">
                Seasoned professionals with 20+ years in oil & gas operations and data management
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-lg text-center hover:bg-slate-700/70 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Award className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Experts</h3>
              <p className="text-gray-300">
                Certified engineers and data scientists with deep industry domain knowledge
              </p>
            </div>
            
            <div className="bg-slate-700/50 p-8 rounded-lg text-center hover:bg-slate-700/70 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Briefcase className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Project Managers</h3>
              <p className="text-gray-300">
                Experienced project leaders ensuring on-time, on-budget delivery of solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-orange-500">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dedicated professionals driving innovation in energy data management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Avatar className="w-32 h-32 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback className="bg-orange-600 text-white text-2xl font-bold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-medium text-lg mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    <button className="p-2 bg-slate-600 rounded-full hover:bg-orange-600 transition-colors">
                      <Linkedin className="h-5 w-5 text-white" />
                    </button>
                    <button className="p-2 bg-slate-600 rounded-full hover:bg-orange-600 transition-colors">
                      <Mail className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our <span className="text-orange-500">Mission</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals passionate about energy data innovation.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Explore Opportunities
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
