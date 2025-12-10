import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NavLink } from '@/components/NavLink';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Officers', href: '/officers' },
  { label: 'Announcements', href: '/announcements' },
  { label: 'Calendar', href: '/calendar' },
  { label: 'Resources', href: '/resources' },
  { label: 'Updates', href: '/updates' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg group-hover:animate-pulse-glow transition-all">
            <span className="text-secondary-foreground font-bold text-sm md:text-base">226</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-primary-foreground font-bold text-sm md:text-base leading-tight">NALC Branch 226</p>
            <p className="text-primary-foreground/70 text-xs">Fort Worth, TX</p>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className="nav-link text-primary-foreground/80"
              activeClassName="text-secondary"
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/login"
            className="ml-4 px-4 py-2 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:brightness-110 transition-all text-sm"
          >
            Member Login
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="lg:hidden bg-primary border-t border-primary-foreground/10 animate-fade-in">
          <div className="container py-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-primary-foreground/80 hover:bg-primary-foreground/10 rounded-lg transition-colors"
                activeClassName="bg-primary-foreground/10 text-secondary"
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-4 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg text-center hover:brightness-110 transition-all"
            >
              Member Login
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
