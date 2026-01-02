import React from 'react';
import { Users, ExternalLink } from 'lucide-react';
import { countryCommunities } from '../../data/content';

const JoinCommunity = () => {
  // Duplicate array for seamless infinite scroll
  const duplicatedCommunities = [...countryCommunities, ...countryCommunities, ...countryCommunities];

  return (
    <section id="join" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#e61e24]/8 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#28a4db]/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#f4a93a]/5 rounded-full blur-[120px]" />
        
        {/* Dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e61e24]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#e61e24]/10 border border-[#e61e24]/20 text-[#e61e24] font-semibold text-sm mb-4">
            Get Connected
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Find Your User Group
          </h2>
          <p className="text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            Connect with fellow open infrastructure enthusiasts in your region.
          </p>
        </div>

        {/* Country Carousel */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0f0f0f] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-carousel">
              {duplicatedCommunities.map((country, idx) => (
                <a
                  key={`${country.id}-${idx}`}
                  href={country.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] w-40"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{country.flag}</div>
                  <div className="text-white font-semibold text-sm mb-1">{country.name}</div>
                  <div className="text-white/40 text-xs flex items-center justify-center gap-1 mb-2">
                    <Users className="w-3 h-3" />
                    {country.members}
                  </div>
                  <div className="flex items-center justify-center gap-1 text-xs font-medium text-[#e61e24] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3 h-3" />
                    Visit
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
