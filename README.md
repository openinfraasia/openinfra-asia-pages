# OpenInfra Asia Community Website

A landing page for the OpenInfra Asia Community built with React and TailwindCSS.

## 📁 Project Structure

```
frontend/
├── public/
│   └── images/          # All images (logo, event banners, hero background)
├── src/
│   ├── data/
│   │   └── content.js   # ⭐ ALL EDITABLE CONTENT HERE
│   ├── components/
│   │   └── landing/     # Page components
│   └── App.js
└── package.json
```

---

## 🎯 Quick Start

### Install Dependencies
```bash
yarn install
```

### Run Development Server
```bash
yarn start
```

### Build for Production
```bash
yarn build
```

---

## ✏️ How to Update Content

All website content is in **`src/data/content.js`**

---

## 📅 Adding Events

### Add an Upcoming Event

Open `src/data/content.js` and add to the `upcomingEvents` array:

```javascript
export const upcomingEvents = [
  // ADD NEW UPCOMING EVENT HERE
  {
    id: 2,                                    // Unique ID
    title: "OpenInfra Day Tokyo 2026",        // Event name
    tagline: "One-day community event",       // Short description (optional)
    date: "March 15, 2026",                   // Date
    location: "Tokyo, Japan",                 // Venue
    description: "Join us for a day of talks and networking.",
    highlights: [                             // Optional bullet points
      "Technical sessions",
      "Networking opportunities",
    ],
    ctaLink: "https://example.com/register",  // Registration link
    featured: false,                          // Set true for main highlight
    image: "/images/event-tokyo.png",         // Event banner (optional)
  },
  
  // Existing events...
];
```

### Add a Past Event

Add to the **top** of the `pastEvents` array (newest first):

```javascript
export const pastEvents = [
  // ADD NEW PAST EVENT HERE (at the top)
  {
    id: 5,                                      // Unique ID
    title: "OpenInfra Summit Asia 2025",        // Event name
    date: "September 2025",                     // Date
    location: "Tokyo, Japan",                   // Location
    attendees: "2,000+",                        // Attendee count
    speakers: "60+",                            // Speaker count
    websiteLink: "https://2025.openinfraasia.org",  // Event website
    image: "/images/summit-asia-2025.png",      // Banner image (optional)
  },
  
  // Older events below...
];
```

### Adding Event Images

1. Add your image to `/public/images/`
2. Reference it as `/images/your-image.png`

**Recommended image sizes:**
- Event banners: 800x450px (16:9 ratio)
- PNG or JPG format

---

## 🌏 Adding User Groups (Countries)

Open `src/data/content.js` and add to the `countryCommunities` array:

```javascript
export const countryCommunities = [
  // Existing countries...
  
  // ADD NEW COUNTRY (keep alphabetical order)
  {
    id: 9,                                    // Unique ID
    name: "Philippines",                      // Country name
    flag: "🇵🇭",                              // Flag emoji
    members: "200+",                          // Member count
    website: "https://openinfra.ph",          // Community website
  },
  
  // More countries...
];
```

### Finding Flag Emojis

Copy flag emojis from: https://emojipedia.org/flags

---

## 🔧 Other Editable Content

### Hero Section
```javascript
export const heroData = {
  title: "OpenInfra Asia Community",
  subtitle: "Regional Hub to Promote & Protect Open Source Infrastructure",
  hashtags: ["#WeAreOpenInfra", ...],  // Typewriter animation
  stats: [...],                         // Statistics cards
};
```

### About Section
```javascript
export const aboutData = {
  title: "About OpenInfra Asia Community",
  mission: "...",
  features: [...],  // Feature cards
};
```

### Footer
```javascript
export const footerData = {
  description: "...",
  quickLinks: [...],
  social: {
    twitter: "https://twitter.com/...",
    linkedin: "https://linkedin.com/...",
    youtube: "https://youtube.com/...",
    github: "https://github.com/...",
  },
  contact: {
    email: "weare@openinfra.asia",
    mailingList: "https://...",
  },
};
```

---

## 🚀 Deployment

### GitHub Pages

1. Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/repo-name"
}
```

2. Install gh-pages:
```bash
yarn add gh-pages
```

3. Add deploy scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "yarn build",
    "deploy": "gh-pages -d build"
  }
}
```

4. Deploy:
```bash
yarn deploy
```

---

## 📝 Content Checklist

When adding new content, make sure:

- [ ] IDs are unique
- [ ] Images are in `/public/images/`
- [ ] Image paths start with `/images/`
- [ ] URLs include `https://`
- [ ] Countries are in alphabetical order
- [ ] Past events are ordered newest first

---

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Red | `#e61e24` | Primary CTA, highlights |
| Yellow | `#f4a93a` | Events section |
| Green | `#39ae4a` | About section |
| Blue | `#28a4db` | Links, accents |
| Dark | `#161616` | Background |

---

## 📧 Support

For questions, contact: weare@openinfra.asia
