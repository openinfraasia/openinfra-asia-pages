import React, { useState } from 'react';
import { Calendar, MapPin, ArrowRight, ExternalLink, Users, Mic, Star, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react';
import { Button } from '../ui/button';
import { upcomingEvents, pastEvents } from '../../data/content';

// Configuration
const PAST_EVENTS_PER_PAGE = 2;

// Placeholder component for events without images
const EventImagePlaceholder = ({ title, className = "" }) => (
  <div className={`bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center ${className}`}>
    <div className="text-center p-4">
      <ImageOff className="w-12 h-12 text-white/20 mx-auto mb-2" />
      <p className="text-white/30 text-sm font-medium">{title}</p>
    </div>
  </div>
);

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(pastEvents.length / PAST_EVENTS_PER_PAGE);
  
  // Get featured event (first one with featured: true, or first event)
  const featuredEvent = upcomingEvents.find(e => e.featured) || upcomingEvents[0];
  
  // Get other upcoming events (non-featured)
  const otherUpcomingEvents = upcomingEvents.filter(e => e.id !== featuredEvent?.id);
  
  // Paginate past events
  const paginatedPastEvents = pastEvents.slice(
    (currentPage - 1) * PAST_EVENTS_PER_PAGE,
    currentPage * PAST_EVENTS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Accent colors for variety
  const accentColors = ['#e61e24', '#f4a93a', '#39ae4a', '#28a4db'];

  return (
    <section id="events" className="py-24 bg-[#161616] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] bg-[#f4a93a]/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#e61e24]/6 rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 80px,
              rgba(244, 169, 58, 0.15) 80px,
              rgba(244, 169, 58, 0.15) 81px
            )`
          }}
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f4a93a]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#f4a93a]/10 border border-[#f4a93a]/20 text-[#f4a93a] font-semibold text-sm mb-4">
            Events
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            OpenInfra Summit Asia
          </h2>
        </div>

        {/* ============ UPCOMING EVENTS SECTION ============ */}
        {upcomingEvents.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 bg-[#39ae4a] rounded-full animate-pulse" />
              <h3 className="text-xl font-semibold text-white">Upcoming Events</h3>
            </div>

            {/* Featured Event */}
            {featuredEvent && (
              <div className="relative bg-gradient-to-br from-white/[0.06] to-transparent backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden mb-6">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#e61e24]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#28a4db]/8 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                
                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-10">
                    {/* Event Image */}
                    {featuredEvent.image ? (
                      <div className="lg:w-96 flex-shrink-0 order-first lg:order-last">
                        <div className="bg-black rounded-2xl overflow-hidden border border-white/10">
                          <img 
                            src={featuredEvent.image} 
                            alt={featuredEvent.title}
                            className="w-full h-48 object-contain p-4"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="lg:w-96 flex-shrink-0 order-first lg:order-last">
                        <div className="bg-black rounded-2xl overflow-hidden border border-white/10">
                          <EventImagePlaceholder title={featuredEvent.title} className="w-full h-48" />
                        </div>
                      </div>
                    )}

                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#39ae4a]/10 border border-[#39ae4a]/20 mb-6">
                        <Star className="w-4 h-4 text-[#39ae4a]" />
                        <span className="text-[#39ae4a] font-medium text-sm">Featured</span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        {featuredEvent.title}
                      </h3>
                      {featuredEvent.tagline && (
                        <p className="text-xl text-[#28a4db] font-medium mb-6">
                          {featuredEvent.tagline}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                          <Calendar className="w-5 h-5 text-[#f4a93a]" />
                          <span className="text-white font-medium">{featuredEvent.date}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                          <MapPin className="w-5 h-5 text-[#e61e24]" />
                          <span className="text-white font-medium">{featuredEvent.location}</span>
                        </div>
                      </div>

                      <p className="text-white/50 text-lg mb-8 leading-relaxed">
                        {featuredEvent.description}
                      </p>

                      <div className="flex flex-wrap gap-4">
                        <Button
                          asChild
                          size="lg"
                          className="bg-gradient-to-r from-[#e61e24] to-[#c91a1f] hover:from-[#c91a1f] hover:to-[#a8161a] text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all group shadow-lg shadow-[#e61e24]/20"
                        >
                          <a href={featuredEvent.ctaLink} className="inline-flex items-center">
                            Register Now
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="lg"
                          className="border-white/20 text-white/80 hover:bg-white/5 hover:text-white px-8 py-6 text-lg rounded-xl"
                        >
                          <a href="#join">Join Community</a>
                        </Button>
                      </div>
                    </div>

                    {/* Highlights - only show if no image or on larger screens */}
                    {featuredEvent.highlights && featuredEvent.highlights.length > 0 && !featuredEvent.image && (
                      <div className="lg:w-80 flex-shrink-0">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                          <h4 className="text-white font-semibold text-lg mb-4">Event Highlights</h4>
                          <ul className="space-y-3">
                            {featuredEvent.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-white/60">
                                <span className="w-1.5 h-1.5 bg-[#28a4db] rounded-full mt-2 flex-shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Other Upcoming Events Grid */}
            {otherUpcomingEvents.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                {otherUpcomingEvents.map((event, idx) => (
                  <div
                    key={event.id}
                    className="bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
                  >
                    {event.image ? (
                      <div className="bg-black rounded-xl overflow-hidden border border-white/10 mb-4">
                        <img 
                          src={event.image} 
                          alt={event.title}
                          className="w-full h-32 object-contain"
                        />
                      </div>
                    ) : (
                      <div className="bg-black rounded-xl overflow-hidden border border-white/10 mb-4">
                        <EventImagePlaceholder title={event.title} className="w-full h-32" />
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-4 h-4" style={{ color: accentColors[idx % 4] }} />
                      <span className="font-medium" style={{ color: accentColors[idx % 4] }}>{event.date}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                    <div className="flex items-center gap-2 text-white/40 text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <p className="text-white/50 mb-4">{event.description}</p>
                    <a 
                      href={event.ctaLink}
                      className="inline-flex items-center gap-2 font-semibold transition-colors hover:gap-3"
                      style={{ color: accentColors[idx % 4] }}
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ============ PAST EVENTS SECTION ============ */}
        {pastEvents.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white/30 rounded-full" />
                <h3 className="text-xl font-semibold text-white">Past Events</h3>
              </div>
              
              {totalPages > 1 && (
                <div className="text-white/40 text-sm">
                  Page {currentPage} of {totalPages}
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {paginatedPastEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all group"
                >
                  {/* Event Image */}
                  <div className="bg-black border-b border-white/10">
                    {event.image ? (
                      <img 
                        src={event.image} 
                        alt={event.title}
                        className="w-full h-40 object-contain"
                      />
                    ) : (
                      <EventImagePlaceholder title={event.title} className="w-full h-40" />
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{event.title}</h4>
                        <div className="flex items-center gap-2 text-white/40 text-sm">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                          <span className="text-white/20">•</span>
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mb-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-white/40" />
                        <span className="text-white/60 text-sm">{event.attendees} attendees</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mic className="w-4 h-4 text-white/40" />
                        <span className="text-white/60 text-sm">{event.speakers} speakers</span>
                      </div>
                    </div>

                    <a
                      href={event.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-medium text-sm text-white/60 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Website
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => goToPage(page)}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-all ${
                        currentPage === page
                          ? 'bg-[#e61e24] text-white shadow-lg shadow-[#e61e24]/20'
                          : 'bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                
                <button
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
