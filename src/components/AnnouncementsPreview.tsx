import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { NavLink } from '@/components/NavLink';

const announcements = [
  {
    id: 1,
    title: 'Contract Negotiation Update',
    excerpt: 'Latest updates on the ongoing national contract negotiations. Important information for all members regarding proposed changes.',
    date: 'Dec 8, 2025',
    category: 'Impactful Notice',
    isImpactful: true,
  },
  {
    id: 2,
    title: 'Holiday Schedule Changes',
    excerpt: 'Review the updated delivery schedules for the upcoming holiday season. Make sure to check your assigned routes.',
    date: 'Dec 5, 2025',
    category: 'Notice',
    isImpactful: false,
  },
  {
    id: 3,
    title: 'Annual Scholarship Applications Open',
    excerpt: 'The John C. Parker Jr. Scholarship applications are now being accepted. Apply by January 15th for consideration.',
    date: 'Dec 1, 2025',
    category: 'Impactful Notice',
    isImpactful: true,
  },
];

export function AnnouncementsPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="red-stripe mb-4" />
            <h2 className="section-heading text-foreground mb-2">Member Announcements</h2>
            <p className="text-muted-foreground">Stay informed with the latest branch news and updates.</p>
          </div>
          <NavLink to="/announcements" className="text-secondary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            View All <ArrowRight size={18} />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {announcements.map((item, index) => (
            <article 
              key={item.id}
              className="card-union overflow-hidden group"
            >
              <div className={`h-1 ${item.isImpactful ? 'bg-accent' : 'bg-secondary'}`} />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    item.isImpactful 
                      ? 'bg-accent/10 text-accent' 
                      : 'bg-secondary/10 text-secondary-foreground'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{item.date}</span>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Meeting Location */}
        <div className="mt-12 card-union p-6 md:p-8 bg-primary text-primary-foreground">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <MapPin size={24} className="text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Branch Meeting Location</h3>
                <p className="text-primary-foreground/70">6900 Baker Blvd, Fort Worth, TX 76118</p>
                <p className="text-primary-foreground/70 flex items-center gap-2 mt-1">
                  <Calendar size={14} /> First Wednesday of each month
                  <Clock size={14} className="ml-2" /> 7:00 PM
                </p>
              </div>
            </div>
            <a href="tel:817-284-5131" className="btn-primary whitespace-nowrap">
              Call 817-284-5131
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { announcements };
