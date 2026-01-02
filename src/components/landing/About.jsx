import React from 'react';
import { Users, Building2, Globe, Shield } from 'lucide-react';
import { aboutData } from '../../data/content';

const iconMap = {
  Users: Users,
  Building2: Building2,
  Globe: Globe,
  Shield: Shield,
};

const About = () => {
  const featureColors = ['#e61e24', '#f4a93a', '#39ae4a', '#28a4db'];

  return (
    <section id="about" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#28a4db]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#39ae4a]/6 rounded-full blur-[100px]" />
        
        {/* Subtle pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#28a4db]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#28a4db]/10 border border-[#28a4db]/20 text-[#28a4db] font-semibold text-sm mb-4">
            Who We Are
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {aboutData.title}
          </h2>
          <p className="text-lg text-white/50 max-w-3xl mx-auto leading-relaxed">
            {aboutData.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            const color = featureColors[index];
            return (
              <div
                key={index}
                className="group bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <IconComponent className="w-7 h-7" style={{ color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
