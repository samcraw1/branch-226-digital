import { Smartphone, Apple, Play, Clock, ExternalLink } from 'lucide-react';

export function MemberApps() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      {/* Red stripe */}
      <div className="absolute left-0 right-0 h-1 bg-accent" style={{ marginTop: '-4rem' }} />
      
      <div className="container">
        <div className="text-center mb-12">
          <div className="w-16 h-1 bg-secondary rounded-full mx-auto mb-4" />
          <h2 className="section-heading mb-4">Member Apps</h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Download the official NALC mobile app to access member resources on the go.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* NALC App */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 md:p-8 hover:bg-primary-foreground/10 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                <Smartphone size={32} className="text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-xl">NALC Member App</h3>
                <p className="text-sm text-primary-foreground/60">Official mobile application</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 text-sm">
              Access your member benefits, find important contacts, read the latest news, and stay connected with your union.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#" className="flex items-center justify-center gap-2 px-5 py-3 bg-card text-card-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
                <Apple size={20} />
                App Store
              </a>
              <a href="#" className="flex items-center justify-center gap-2 px-5 py-3 bg-card text-card-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity">
                <Play size={20} />
                Google Play
              </a>
            </div>
          </div>

          {/* Work Hour Tracker */}
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 md:p-8 hover:bg-primary-foreground/10 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                <Clock size={32} className="text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-xl">Work Hour Tracker</h3>
                <p className="text-sm text-primary-foreground/60">Track your work hours</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 text-sm">
              Keep accurate records of your work hours, overtime, and schedules. Essential for ensuring proper compensation.
            </p>
            <a href="https://nalc.org/workplace-issues/work-hour-tracker" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:brightness-110 transition-all w-full sm:w-auto">
              <ExternalLink size={18} />
              Open Tracker
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
