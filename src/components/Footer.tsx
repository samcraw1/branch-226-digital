import { NavLink } from '@/components/NavLink';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Red stripe */}
      <div className="h-1 bg-accent" />
      
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-bold">226</span>
              </div>
              <div>
                <p className="font-bold">NALC Branch 226</p>
                <p className="text-sm text-primary-foreground/70">Fort Worth, TX</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Proudly representing over 1,100 letter carriers serving the Fort Worth area since 1889.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/officers" className="text-primary-foreground/70 hover:text-secondary transition-colors">Branch Officers</NavLink></li>
              <li><NavLink to="/announcements" className="text-primary-foreground/70 hover:text-secondary transition-colors">Announcements</NavLink></li>
              <li><NavLink to="/calendar" className="text-primary-foreground/70 hover:text-secondary transition-colors">Meeting Calendar</NavLink></li>
              <li><NavLink to="/resources" className="text-primary-foreground/70 hover:text-secondary transition-colors">Member Resources</NavLink></li>
              <li><NavLink to="/updates" className="text-primary-foreground/70 hover:text-secondary transition-colors">Panther City Updates</NavLink></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" />
                <span className="text-primary-foreground/70">6900 Baker Blvd<br />Fort Worth, TX 76118</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-secondary" />
                <a href="tel:817-284-5131" className="text-primary-foreground/70 hover:text-secondary transition-colors">817-284-5131</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-secondary" />
                <a href="mailto:info@nalcbranch226.org" className="text-primary-foreground/70 hover:text-secondary transition-colors">info@nalcbranch226.org</a>
              </li>
            </ul>
          </div>

          {/* Social & Apps */}
          <div>
            <h4 className="font-bold mb-4 text-secondary">Stay Connected</h4>
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram size={18} />
              </a>
            </div>
            <p className="text-xs text-primary-foreground/50">
              Download the official NALC app for members
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} NALC Branch 226. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <NavLink to="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</NavLink>
            <NavLink to="/terms" className="hover:text-secondary transition-colors">Terms of Use</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
