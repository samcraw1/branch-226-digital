import { Calendar, Clock, MapPin, Download } from 'lucide-react';
import { NavLink } from '@/components/NavLink';

const upcomingEvents = [
  {
    id: 1,
    title: 'Monthly Branch Meeting',
    date: 'January 8, 2025',
    time: '7:00 PM',
    location: '6900 Baker Blvd, Fort Worth, TX',
    type: 'Meeting',
  },
  {
    id: 2,
    title: 'Steward Training Session',
    date: 'January 15, 2025',
    time: '6:30 PM',
    location: 'Branch Hall',
    type: 'Training',
  },
  {
    id: 3,
    title: 'Monthly Branch Meeting',
    date: 'February 5, 2025',
    time: '7:00 PM',
    location: '6900 Baker Blvd, Fort Worth, TX',
    type: 'Meeting',
  },
];

export function CalendarPreview() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <div className="red-stripe mx-auto mb-4" />
          <h2 className="section-heading text-foreground mb-4">Upcoming Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Branch meetings are held the first Wednesday of each month. Don't miss important events!
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {upcomingEvents.map((event, index) => (
            <div 
              key={event.id}
              className="card-union p-5 flex flex-col sm:flex-row sm:items-center gap-4"
            >
              {/* Date Box */}
              <div className="w-16 h-16 rounded-lg bg-primary flex flex-col items-center justify-center shrink-0">
                <span className="text-secondary font-bold text-xl">{event.date.split(' ')[1].replace(',', '')}</span>
                <span className="text-primary-foreground/70 text-xs uppercase">{event.date.split(' ')[0].slice(0, 3)}</span>
              </div>

              {/* Event Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                    event.type === 'Meeting' ? 'bg-secondary/20 text-secondary-foreground' : 'bg-accent/10 text-accent'
                  }`}>
                    {event.type}
                  </span>
                </div>
                <h3 className="font-bold text-foreground">{event.title}</h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {event.location}
                  </span>
                </div>
              </div>

              {/* Action */}
              <button className="btn-outline text-sm py-2 px-4 text-foreground border-border hover:border-secondary hover:text-secondary">
                <Download size={16} />
                Add to Calendar
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <NavLink to="/calendar" className="btn-primary">
            <Calendar size={18} />
            View Full Calendar
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export { upcomingEvents };
