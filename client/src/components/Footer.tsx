import { Link } from 'react-router-dom';
import Logo from '@/components/ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { label: 'Freelance', href: '/freelance' },
        { label: 'Events', href: '/events' },
        { label: 'Community', href: '/community' },
        { label: 'Dashboard', href: '/dashboard' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/docs' },
        { label: 'API Reference', href: '/api' },
        { label: 'Tutorials', href: '/tutorials' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Press', href: '/press' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'GDPR', href: '/gdpr' },
      ],
    },
  ];

  const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com', icon: '𝕏' },
    { label: 'Discord', href: 'https://discord.com', icon: '💬' },
    { label: 'GitHub', href: 'https://github.com', icon: '🐙' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
  ];

  return (
    <footer className="bg-gradient-dark border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className='mb-2 max-w-[120px] sm:max-w-none'>
              <Logo variant="footer" height="h-10" />
            </div>

            <p className="text-muted-foreground mb-6 max-w-md text-sm sm:text-base">
              The ultimate platform for tech collaboration, connecting freelancers, 
              hosting events, and building communities in the Web3 era.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4 text-sm sm:text-base">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8 mt-12">
          <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center text-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} W3nity. All rights reserved.
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm">
              <span className="text-muted-foreground">Built with ❤️ for Hack With Gujarat</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
