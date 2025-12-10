import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Heart, Newspaper, Landmark, Briefcase, Users, HandHeart, GraduationCap, ExternalLink, Smartphone, Clock, Apple, Play } from 'lucide-react';

const resourceCategories = [
  {
    id: 'benefits',
    title: 'Member Benefits',
    icon: Heart,
    description: 'Health insurance, retirement plans, and member discounts.',
    links: [
      { title: 'NALC Health Benefit Plan', url: 'https://nalchbp.org/' },
      { title: 'Mutual Benefit Association', url: 'https://nalc.org/mba' },
      { title: 'Retirement Information', url: 'https://nalc.org/retirement' },
    ]
  },
  {
    id: 'news',
    title: 'News & Information',
    icon: Newspaper,
    description: 'Stay updated with national NALC news and postal industry developments.',
    links: [
      { title: 'NALC National News', url: 'https://nalc.org/news' },
      { title: 'The Postal Record', url: 'https://nalc.org/postal-record' },
      { title: 'USPS News', url: 'https://about.usps.com/newsroom/' },
    ]
  },
  {
    id: 'government',
    title: 'Government Affairs',
    icon: Landmark,
    description: 'Legislative updates and political action resources.',
    links: [
      { title: 'Legislative Action Center', url: 'https://nalc.org/government-affairs' },
      { title: 'Letter Carrier Political Fund', url: 'https://nalc.org/lcpf' },
      { title: 'Contact Your Representatives', url: 'https://www.congress.gov/members' },
    ]
  },
  {
    id: 'workplace',
    title: 'Workplace Issues',
    icon: Briefcase,
    description: 'Grievance procedures, safety information, and worker rights.',
    links: [
      { title: 'Grievance Procedures', url: 'https://nalc.org/workplace-issues' },
      { title: 'Safety & Health', url: 'https://nalc.org/safety' },
      { title: 'Contract Information', url: 'https://nalc.org/contract' },
    ]
  },
  {
    id: 'admin',
    title: 'Union Administration',
    icon: Users,
    description: 'Branch documents, bylaws, and administrative resources.',
    links: [
      { title: 'NALC Constitution', url: 'https://nalc.org/constitution' },
      { title: 'Branch Bylaws', url: '#' },
      { title: 'Officer Resources', url: 'https://nalc.org/officers' },
    ]
  },
  {
    id: 'community',
    title: 'Community Service',
    icon: HandHeart,
    description: 'Food drives, charity events, and community outreach programs.',
    links: [
      { title: 'Stamp Out Hunger Food Drive', url: 'https://nalc.org/food-drive' },
      { title: 'Community Outreach', url: 'https://nalc.org/community' },
      { title: 'Muscular Dystrophy Association', url: 'https://nalc.org/mda' },
    ]
  },
  {
    id: 'scholarship',
    title: 'John C. Parker Jr. Scholarship',
    icon: GraduationCap,
    description: 'Annual scholarship program for NALC members and dependents.',
    links: [
      { title: 'Scholarship Information', url: 'https://nalc.org/scholarship' },
      { title: 'Application Form', url: '#' },
      { title: 'Past Recipients', url: '#' },
    ]
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <div className="h-1 w-16 bg-secondary rounded-full mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Member Resources</h1>
              <p className="text-xl text-primary-foreground/70">
                Access important information, benefits, and tools for NALC members.
              </p>
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resourceCategories.map((category) => (
                <div 
                  key={category.id}
                  id={category.id}
                  className="card-union p-6 scroll-mt-24"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <category.icon size={24} className="text-secondary" />
                    </div>
                    <h2 className="font-bold text-lg text-foreground">{category.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.links.map((link) => (
                      <li key={link.title}>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-foreground hover:text-secondary transition-colors group"
                        >
                          <ExternalLink size={14} className="opacity-50 group-hover:opacity-100" />
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Member Apps */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
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
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                    <Smartphone size={32} className="text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">NALC Member App</h3>
                    <p className="text-sm text-primary-foreground/60">Official mobile application</p>
                  </div>
                </div>
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
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center">
                    <Clock size={32} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Work Hour Tracker</h3>
                    <p className="text-sm text-primary-foreground/60">Track your work hours</p>
                  </div>
                </div>
                <a href="https://nalc.org/workplace-issues/work-hour-tracker" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:brightness-110 transition-all">
                  <ExternalLink size={18} />
                  Open Tracker
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
