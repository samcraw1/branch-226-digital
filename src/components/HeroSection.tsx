import { ArrowRight, Smartphone } from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import heroImage from '@/assets/hero-postal.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-navy-dark/80" />
      
      {/* Red accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30 mb-6 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">Serving Fort Worth Since 1889</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '100ms' }}>
            NALC Branch{' '}
            <span className="text-secondary">226</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
            National Association of Letter Carriers
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-10 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center border border-secondary/30">
                <span className="text-secondary font-bold">1.1K+</span>
              </div>
              <span className="text-primary-foreground/70 text-sm">Active<br />Members</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center border border-accent/30">
                <span className="text-accent font-bold">135+</span>
              </div>
              <span className="text-primary-foreground/70 text-sm">Years of<br />Service</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <NavLink to="/announcements" className="btn-primary group">
              Latest Updates
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
            <NavLink to="/resources" className="btn-outline text-primary-foreground border-primary-foreground/30 hover:border-secondary hover:text-secondary">
              <Smartphone size={18} />
              Member Apps
            </NavLink>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
