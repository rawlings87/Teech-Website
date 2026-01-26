import Link from 'next/link';
import { footer, navigation, siteConfig } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="bg-steel border-t border-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Status Line */}
        <div className="mb-8 pb-8 border-b border-slate">
          <p className="text-xs font-mono text-success text-center">
            {footer.status}
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-frost mb-4">
              {siteConfig.name}
            </h3>
            <p className="text-sm text-mist mb-2">{siteConfig.description}</p>
            <p className="text-xs text-mist">{siteConfig.location}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-frost mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-mist hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-frost mb-4">Legal</h4>
            <ul className="space-y-2">
              {footer.links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-mist hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate">
          <p className="text-xs text-mist text-center">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
