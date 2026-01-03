/**
 * ============================================================================
 * OPENINFRA ASIA COMMUNITY - SITE CONTENT
 * ============================================================================
 * 
 * This file contains all editable content for the website.
 * To update content, simply modify the values below.
 * 
 * SECTIONS:
 * 1. SITE CONFIG - Basic site information
 * 2. HERO - Homepage hero section
 * 3. ABOUT - About section content
 * 4. EVENTS - Upcoming and past events
 * 5. COMMUNITIES - Country user groups
 * 6. FOOTER - Footer content and links
 */

// ============================================================================
// 1. SITE CONFIG
// ============================================================================
export const siteConfig = {
  name: "OpenInfra Asia",
  tagline: "Community",
  logo: "/images/logo.jpg",
};

// ============================================================================
// 2. HERO SECTION
// ============================================================================
export const heroData = {
  title: "OpenInfra Asia Community",
  subtitle: "Regional Hub to Promote & Protect Open Source Infrastructure",
  backgroundImage: "/images/hero-bg.png",
  
  // Typewriter hashtags (cycles through these)
  hashtags: [
    "#WeAreOpenInfra",
    "#KamiOpenInfra",
    "#我们是OpenInfra",
    "#私たちはOpenInfra",
    "#우리는OpenInfra",
    "#हमOpenInfraहैं",
    "#เราคือOpenInfra",
    "#ChúngTôiLàOpenInfra",
    "#ကျွန်တော်တို့OpenInfra",
  ],
  
  // Statistics displayed in hero
  stats: [
    { value: "40%+", label: "OpenInfra Members" },
    { value: "8+", label: "Countries Represented" },
    { value: "1,500+", label: "Summit Attendees" },
    { value: "4", label: "Annual Events" },
  ],
  
  // Call-to-action buttons
  primaryCTA: { text: "Find Your User Group", href: "#join" },
  secondaryCTA: { text: "View OpenInfra Summit", href: "#events" },
};

// ============================================================================
// 3. ABOUT SECTION
// ============================================================================
export const aboutData = {
  title: "About OpenInfra Asia Community",
  mission: "Based in Singapore, OpenInfra Asia Community's mission is to grow and sustain a strong and vibrant regional ecosystem that collaborates openly to keep developing vital software technologies in the open.",
  
  // Feature cards
  features: [
    {
      title: "Build Communities",
      description: "Strengthen regional open source communities and foster collaboration across Asia.",
      icon: "Users",
    },
    {
      title: "Empower Organizations",
      description: "Help organizations succeed with open infrastructure and become regional leaders.",
      icon: "Building2",
    },
    {
      title: "Global Voice",
      description: "Create a united front to address regional challenges with global impact.",
      icon: "Globe",
    },
    {
      title: "Protect Open Source",
      description: "Promote and protect open source communities and technologies they develop.",
      icon: "Shield",
    },
  ],
};

// ============================================================================
// 4. EVENTS
// ============================================================================

/**
 * UPCOMING EVENTS
 * - First event with featured: true will be highlighted
 * - Add new events at the top
 */
export const upcomingEvents = [
  {
    id: 1,
    title: "OpenInfra Summit Asia 2026",
    tagline: "The Premier Open Infrastructure Event in Asia",
    date: "8-9 September, 2026",
    location: "Shanghai International Convention Center",
    description: "Join thousands of open source enthusiasts, developers, and industry leaders for the biggest OpenInfra event in Asia.",
    highlights: [
      "World-class keynotes from industry leaders",
      "50+ technical sessions & workshops",
      "Hands-on labs with OpenStack, Kubernetes & more",
      "Networking with 2,000+ attendees from 30+ countries",
    ],
    ctaLink: "https://www.lfasiallc.com/kubecon-cloudnativecon-openinfra-summit-china/",
    featured: true,
    image: "/images/openinfra-summit-asia-2026.png",
  },
];

/**
 * PAST EVENTS
 * - Add newest events at the top
 * - Events are paginated automatically (2 per page)
 */
export const pastEvents = [
  {
    id: 1,
    title: "OpenInfra Summit Asia 2024",
    date: "3-4 September 2024",
    location: "Suwon, South Korea",
    attendees: "1,500+",
    speakers: "240",
    websiteLink: "https://2024.openinfraasia.org",
    image: "/images/openinfra-summit-asia-2024.png",
  },
  {
    id: 2,
    title: "OpenInfra & Cloud Native Days Asia 2022",
    date: "23 July 2022",
    location: "Virtual Event",
    attendees: "196+",
    speakers: "26",
    websiteLink: "https://2022.openinfra.asia",
    image: "/images/openinfra-days-asia-2022.png",
  },
  {
    id: 3,
    title: "OpenInfra Days Asia 2021",
    date: "11 September 2021",
    location: "Virtual Event",
    attendees: "631+",
    speakers: "47",
    websiteLink: "https://2021.openinfra.asia",
    image: "/images/openinfra-days-asia-2021.png",
  },
];

// ============================================================================
// 5. COUNTRY COMMUNITIES
// ============================================================================

/**
 * USER GROUPS BY COUNTRY
 * - Sorted alphabetically by name
 * - Website links open in new tab
 */
export const countryCommunities = [
  { id: 1, name: "China", flag: "🇨🇳", website: "https://www.meetup.com/china-openinfra-meetup" },
  { id: 2, name: "India", flag: "🇮🇳", website: "https://www.meetup.com/indian-openinfra-user-group" },
  { id: 3, name: "Indonesia", flag: "🇮🇩", website: "https://openinfra.id" },
  { id: 4, name: "Japan", flag: "🇯🇵", website: "https://www.meetup.com/pro/openinfradev" },
  { id: 5, name: "Myanmar", flag: "🇲🇲", website: "https://www.meetup.com/openinfra-user-group-myanmar" },
  { id: 6, name: "South Korea", flag: "🇰🇷", website: "https://openinfra-kr.org" },
  { id: 7, name: "Thailand", flag: "🇹🇭", website: "https://www.meetup.com/open-infrastructure-official-group-thailand" },
  { id: 8, name: "Vietnam", flag: "🇻🇳", website: "https://vietopeninfra.org" },
];

// ============================================================================
// 6. FOOTER
// ============================================================================
export const footerData = {
  description: "OpenInfra Asia Community is a regional hub supported by the OpenInfra Foundation, dedicated to promoting and protecting open source infrastructure in Asia.",
  
  // Quick navigation links
  quickLinks: [
    { label: "About", href: "#about" },
    { label: "OpenInfra Summit", href: "#events" },
    { label: "Join Community", href: "#join" },
  ],
  
  // Social media links
  social: {
    twitter: "https://twitter.com/openinfraasia",
    linkedin: "https://www.linkedin.com/company/openinfra-asia",
    youtube: "https://www.youtube.com/@openinfraasia",
    github: "https://github.com/openinfraasia",
  },
  
  // Contact information
  contact: {
    email: "weare@openinfra.asia",
    mailingList: "https://lists.openinfra.dev/mailman3/lists/openinfra-asia.lists.openinfra.dev/",
  },
  
  // External link
  mainSite: "https://openinfra.org",
};
