import React from 'react';
import { Twitter, Linkedin, Youtube, Github, Mail, ExternalLink } from 'lucide-react';
import { footerData } from '../../data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#e61e24]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img 
                src="/images/logo.jpg" 
                alt="OpenInfra Asia Community" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">OpenInfra Asia</span>
                <span className="text-white/50 font-medium text-sm leading-tight">Community</span>
              </div>
            </a>
            <p className="text-white/40 leading-relaxed mb-6 max-w-md">
              {footerData.description}
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={footerData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={footerData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={footerData.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href={footerData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:text-white transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="text-white/50 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {footerData.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={footerData.contact.mailingList}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#28a4db]/10 hover:bg-[#28a4db]/20 border border-[#28a4db]/20 rounded-lg text-[#28a4db] font-medium text-sm transition-colors"
                >
                  Join Mailing List
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} OpenInfra Asia Community.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://openinfra.org/legal/event-policy" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Event Policy
            </a>
            <a href="https://openinfra.org/legal/code-of-conduct" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              Code of Conduct
            </a>
            <a
              href={footerData.mainSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/60 text-sm transition-colors flex items-center gap-1"
            >
              OpenInfra.org
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
