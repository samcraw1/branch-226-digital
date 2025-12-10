import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MapPin, Phone, Calendar, Clock } from 'lucide-react';

const announcements = [
  {
    id: 1,
    title: 'Contract Negotiation Update',
    content: 'Latest updates on the ongoing national contract negotiations. Important information for all members regarding proposed changes. The national negotiations continue with positive momentum. Key items under discussion include COLA adjustments and workplace safety improvements. We encourage all members to stay informed and attend upcoming branch meetings for detailed updates.',
    date: 'December 8, 2025',
    category: 'Impactful Notice',
    isImpactful: true,
  },
  {
    id: 2,
    title: 'Holiday Schedule Changes',
    content: 'Review the updated delivery schedules for the upcoming holiday season. Make sure to check your assigned routes. Management has posted the holiday schedules at all stations. Please review your assignments and contact your steward if you have any questions or concerns about your scheduled hours.',
    date: 'December 5, 2025',
    category: 'Notice',
    isImpactful: false,
  },
  {
    id: 3,
    title: 'Annual Scholarship Applications Open',
    content: 'The John C. Parker Jr. Scholarship applications are now being accepted. Apply by January 15th for consideration. This scholarship supports the education of NALC members and their dependents. Applications are available at the branch office or can be downloaded from the resources section.',
    date: 'December 1, 2025',
    category: 'Impactful Notice',
    isImpactful: true,
  },
  {
    id: 4,
    title: 'New Steward Appointments',
    content: 'We are pleased to announce the appointment of new shop stewards at several Fort Worth stations. These dedicated members will be representing their fellow carriers and ensuring contract compliance. Welcome to the steward team!',
    date: 'November 28, 2025',
    category: 'Notice',
    isImpactful: false,
  },
  {
    id: 5,
    title: 'Safety Alert: Weather Protocols',
    content: 'With winter weather approaching, please review the safety protocols for adverse conditions. Your safety is paramount. Never take unnecessary risks during severe weather. Contact your supervisor if conditions become dangerous.',
    date: 'November 25, 2025',
    category: 'Impactful Notice',
    isImpactful: true,
  },
];

const Announcements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <div className="h-1 w-16 bg-secondary rounded-full mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Member Announcements</h1>
              <p className="text-xl text-primary-foreground/70">
                Stay informed with the latest news, notices, and updates from Branch 226.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Announcements List */}
              <div className="lg:col-span-2 space-y-6">
                {announcements.map((item) => (
                  <article 
                    key={item.id}
                    className="card-union overflow-hidden"
                  >
                    <div className={`h-1 ${item.isImpactful ? 'bg-accent' : 'bg-secondary'}`} />
                    <div className="p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          item.isImpactful 
                            ? 'bg-accent/10 text-accent' 
                            : 'bg-secondary/10 text-secondary-foreground'
                        }`}>
                          {item.category}
                        </span>
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                      <h2 className="font-bold text-xl text-foreground mb-3">{item.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Meeting Location */}
                <div className="card-union p-6 bg-primary text-primary-foreground">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <MapPin size={20} className="text-secondary" />
                    Branch Office
                  </h3>
                  <p className="text-primary-foreground/70 mb-2">6900 Baker Blvd</p>
                  <p className="text-primary-foreground/70 mb-4">Fort Worth, TX 76118</p>
                  <a href="tel:817-284-5131" className="flex items-center gap-2 text-secondary font-semibold hover:brightness-110 transition-all">
                    <Phone size={16} />
                    817-284-5131
                  </a>
                </div>

                {/* Next Meeting */}
                <div className="card-union p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
                    <Calendar size={20} className="text-secondary" />
                    Next Meeting
                  </h3>
                  <p className="text-foreground font-semibold">January 8, 2025</p>
                  <p className="text-muted-foreground flex items-center gap-2 mt-1">
                    <Clock size={14} /> 7:00 PM
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    Branch meetings are held the first Wednesday of each month.
                  </p>
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

export default Announcements;
