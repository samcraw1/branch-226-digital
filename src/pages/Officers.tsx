import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Shield, Award, Users, Briefcase, Heart, Gavel, UserCheck, Phone } from 'lucide-react';

const officers = [
  { name: 'John Smith', title: 'President', icon: Shield, description: 'Leads the branch and represents members in all official capacities.' },
  { name: 'Maria Rodriguez', title: 'Vice President', icon: Award, description: 'Assists the President and presides in their absence.' },
  { name: 'David Johnson', title: 'Secretary', icon: Briefcase, description: 'Maintains records and handles correspondence.' },
  { name: 'Sarah Williams', title: 'Treasurer', icon: Briefcase, description: 'Manages branch finances and membership dues.' },
  { name: 'Michael Brown', title: 'HBR/MBA Rep', icon: Heart, description: 'Health Benefits Representative and Mutual Benefit Association contact.' },
  { name: 'Robert Davis', title: 'Director of Retirees', icon: UserCheck, description: 'Represents retired letter carriers and coordinates retiree activities.' },
  { name: 'Lisa Martinez', title: 'Sergeant-at-Arms', icon: Gavel, description: 'Maintains order during meetings and assists with security.' },
  { name: 'James Wilson', title: 'Trustee', icon: Users, description: 'Audits branch finances and ensures proper administration.' },
  { name: 'Patricia Garcia', title: 'Trustee', icon: Users, description: 'Audits branch finances and ensures proper administration.' },
  { name: 'Thomas Anderson', title: 'Trustee', icon: Users, description: 'Audits branch finances and ensures proper administration.' },
  { name: 'Jennifer Lee', title: 'Trustee', icon: Users, description: 'Audits branch finances and ensures proper administration.' },
  { name: 'Christopher Taylor', title: 'Trustee', icon: Users, description: 'Audits branch finances and ensures proper administration.' },
  { name: 'Elizabeth Moore', title: 'Trustee', icon: Users, description: 'Audits branch finances and ensures proper administration.' },
  { name: 'Daniel Jackson', title: 'National Business Agent', icon: Shield, description: 'Represents the region at the national level and assists with complex grievances.' },
];

const Officers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <div className="h-1 w-16 bg-secondary rounded-full mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Branch Officers</h1>
              <p className="text-xl text-primary-foreground/70">
                Meet the dedicated leaders who represent and serve the letter carriers of NALC Branch 226.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Bar */}
        <section className="bg-secondary py-4">
          <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground font-medium">
              Need to reach our officers?
            </p>
            <a href="tel:817-284-5131" className="flex items-center gap-2 text-secondary-foreground font-bold hover:opacity-80 transition-opacity">
              <Phone size={18} />
              817-284-5131
            </a>
          </div>
        </section>

        {/* Officers Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {officers.map((officer, index) => (
                <div 
                  key={officer.name + officer.title}
                  className="card-union p-6 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <officer.icon size={32} className="text-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto -mt-8 mb-4 border-4 border-card shadow-lg">
                    <span className="text-secondary-foreground font-bold text-xs">226</span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{officer.name}</h3>
                  <p className="text-secondary font-semibold text-sm mb-3">{officer.title}</p>
                  <p className="text-muted-foreground text-sm">{officer.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Officers;
