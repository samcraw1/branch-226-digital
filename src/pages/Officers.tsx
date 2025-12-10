import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Shield, Award, Users, Briefcase, Heart, Gavel, UserCheck, Phone, Printer, MapPin } from 'lucide-react';

const executiveBoard = [
  { name: 'Michael Barrett', title: 'President', icon: Shield },
  { name: 'Christi Fite', title: 'Vice President', icon: Award },
  { name: 'Doyle "Buck" Langston', title: 'Secretary', icon: Briefcase },
  { name: 'Steven Vasquez', title: 'Treasurer', icon: Briefcase },
];

const boardReps = [
  { name: 'Sharon Rucker', title: 'HBR/MBA Rep', icon: Heart },
  { name: 'Miranda Miller', title: 'Dir. of Retirees', icon: UserCheck },
  { name: 'Manuel Herrera', title: 'Sgt-at-Arms', icon: Gavel },
];

const trustees = [
  { name: 'Rodney Anderson', title: 'Trustee', icon: Users },
  { name: 'Art Zamora', title: 'Trustee', icon: Users },
  { name: 'Hilda Campos', title: 'Trustee', icon: Users },
  { name: 'Philip Taylor', title: 'Trustee', icon: Users },
  { name: 'Keith Robertson', title: 'Trustee', icon: Users },
];

const nba = {
  name: 'Shawn Boyd',
  title: 'National Business Agent - NALC Region 10',
  phone: '(281) 540-5627',
  fax: '(281) 540-5667',
  address: 'Highway 59N, Kingwood, TX 77339',
  icon: Shield,
};

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

        {/* Executive Board */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12">
              <div className="red-stripe mb-4" />
              <h2 className="section-heading text-foreground">Executive Board</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {executiveBoard.map((officer) => (
                <div 
                  key={officer.name}
                  className="card-union p-6 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <officer.icon size={32} className="text-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto -mt-8 mb-4 border-4 border-card shadow-lg">
                    <span className="text-secondary-foreground font-bold text-xs">226</span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{officer.name}</h3>
                  <p className="text-secondary font-semibold text-sm">{officer.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board Representatives */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="mb-12">
              <div className="red-stripe mb-4" />
              <h2 className="section-heading text-foreground">Board Representatives</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardReps.map((officer) => (
                <div 
                  key={officer.name}
                  className="card-union p-6 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <officer.icon size={32} className="text-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto -mt-8 mb-4 border-4 border-card shadow-lg">
                    <span className="text-secondary-foreground font-bold text-xs">226</span>
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{officer.name}</h3>
                  <p className="text-secondary font-semibold text-sm">{officer.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trustees */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12">
              <div className="red-stripe mb-4" />
              <h2 className="section-heading text-foreground">Trustees</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {trustees.map((officer) => (
                <div 
                  key={officer.name}
                  className="card-union p-6 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <officer.icon size={28} className="text-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mx-auto -mt-8 mb-4 border-4 border-card shadow-lg">
                    <span className="text-secondary-foreground font-bold text-xs">226</span>
                  </div>
                  <h3 className="font-bold text-foreground">{officer.name}</h3>
                  <p className="text-secondary font-semibold text-sm">{officer.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* National Business Agent */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="mb-12">
              <div className="red-stripe mb-4" />
              <h2 className="section-heading text-foreground">National Business Agent</h2>
            </div>
            <div className="card-union p-6 md:p-8 bg-primary text-primary-foreground">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <nba.icon size={36} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{nba.name}</h3>
                    <p className="text-secondary font-semibold">{nba.title}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:ml-auto text-sm">
                  <a href={`tel:${nba.phone.replace(/[^\d]/g, '')}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                    <Phone size={16} className="text-secondary" />
                    {nba.phone}
                  </a>
                  <span className="flex items-center gap-2">
                    <Printer size={16} className="text-secondary" />
                    {nba.fax}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-secondary" />
                    {nba.address}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Officers;
