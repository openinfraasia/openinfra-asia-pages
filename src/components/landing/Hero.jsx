import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';
import { heroData } from '../../data/content';

// Typewriter effect component
const TypewriterHashtag = ({ hashtags }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentHashtag = hashtags[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentHashtag.length) {
          setDisplayText(currentHashtag.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % hashtags.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, hashtags]);

  return (
    <span className="text-white">
      {displayText}
      <span className="inline-block w-1 h-[0.8em] bg-white ml-1 animate-pulse" />
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#161616]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <img
          src="/images/hero-bg.png"
          alt="OpenInfra Summit"
          className="w-full h-full object-cover opacity-70"
        />
        {/* Subtle gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#e61e24]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#28a4db]/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {heroData.title}
          </h1>

          {/* Typewriter Hashtag */}
          <div className="mb-8 h-16 flex items-center justify-center">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <TypewriterHashtag hashtags={heroData.hashtags} />
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-white/60 mb-12 max-w-3xl mx-auto">
            {heroData.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              asChild
              size="lg"
              className="bg-[#e61e24] hover:bg-[#c91a1f] text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all group shadow-lg shadow-[#e61e24]/20"
            >
              <a href="#join" className="inline-flex items-center">
                Find Your User Group
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white/80 hover:bg-white/5 hover:text-white px-8 py-6 text-lg rounded-xl backdrop-blur-sm"
            >
              <a href="#events">View OpenInfra Summit</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {heroData.stats.map((stat, index) => {
              const accentColors = ['#e61e24', '#f4a93a', '#39ae4a', '#28a4db'];
              return (
                <div
                  key={index}
                  className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-black/50 transition-all"
                >
                  <div 
                    className="text-3xl sm:text-4xl font-bold mb-2"
                    style={{ color: accentColors[index] }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <a 
            href="#about" 
            className="text-white/30 hover:text-white/60 transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
