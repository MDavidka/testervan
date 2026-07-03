import { Link } from 'react-router-dom';
import { Cloud, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Company: [
      { to: '/about', label: 'About Us' },
      { to: '/contact', label: 'Contact' },
      { to: '/privacy', label: 'Privacy Policy' },
    ],
    Services: [
      { to: '/pricing', label: 'Shared Hosting' },
      { to: '/pricing', label: 'VPS Hosting' },
      { to: '/pricing', label: 'Dedicated Servers' },
      { to: '/pricing', label: 'Cloud Hosting' },
    ],
    Support: [
      { to: '/contact', label: 'Help Center' },
      { to: '/contact', label: 'Support Tickets' },
      { to: '/contact', label: 'Live Chat' },
    ],
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Cloud className="h-6 w-6 text-accent-500" />
              <span className="font-bold text-lg">
                Nebula<span className="text-accent-500">Host</span>
              </span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Premium cloud hosting solutions for businesses and developers worldwide.
              Lightning-fast performance, 24/7 support.
            </p>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent-500" />
                <a href="mailto:hello@nebulahost.com" className="hover:text-accent-500 transition-colors">
                  hello@nebulahost.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent-500" />
                <a href="tel:+15551234567" className="hover:text-accent-500 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-500" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} NebulaHost. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
            <Link to="/privacy" className="hover:text-accent-500 transition-colors">
              Privacy
            </Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-accent-500 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}