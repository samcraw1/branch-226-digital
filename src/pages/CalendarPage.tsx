import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Calendar, Clock, MapPin, Download, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const events = [
  { id: 1, title: 'Monthly Branch Meeting', date: '2025-01-08', time: '7:00 PM', location: '6900 Baker Blvd, Fort Worth, TX', type: 'Meeting' },
  { id: 2, title: 'Steward Training Session', date: '2025-01-15', time: '6:30 PM', location: 'Branch Hall', type: 'Training' },
  { id: 3, title: 'Monthly Branch Meeting', date: '2025-02-05', time: '7:00 PM', location: '6900 Baker Blvd, Fort Worth, TX', type: 'Meeting' },
  { id: 4, title: 'Food Drive Kickoff', date: '2025-02-15', time: '9:00 AM', location: 'Various Locations', type: 'Community' },
  { id: 5, title: 'Monthly Branch Meeting', date: '2025-03-05', time: '7:00 PM', location: '6900 Baker Blvd, Fort Worth, TX', type: 'Meeting' },
  { id: 6, title: 'Retiree Luncheon', date: '2025-03-20', time: '12:00 PM', location: 'Branch Hall', type: 'Social' },
  { id: 7, title: 'Monthly Branch Meeting', date: '2025-04-02', time: '7:00 PM', location: '6900 Baker Blvd, Fort Worth, TX', type: 'Meeting' },
];

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 0, 1));

  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const upcomingEvents = events.filter(e => new Date(e.date) >= new Date());

  const downloadICS = (event: typeof events[0]) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.date.replace(/-/g, '')}T190000
SUMMARY:${event.title}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;
    
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${event.title.replace(/\s/g, '-')}.ics`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <div className="h-1 w-16 bg-secondary rounded-full mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Events Calendar</h1>
              <p className="text-xl text-primary-foreground/70">
                Branch meetings are held the first Wednesday of each month at 7:00 PM.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Events List */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-foreground mb-6">Upcoming Events</h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div 
                      key={event.id}
                      className="card-union p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                    >
                      {/* Date Box */}
                      <div className="w-16 h-16 rounded-lg bg-primary flex flex-col items-center justify-center shrink-0">
                        <span className="text-secondary font-bold text-xl">
                          {new Date(event.date).getDate()}
                        </span>
                        <span className="text-primary-foreground/70 text-xs uppercase">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                        </span>
                      </div>

                      {/* Event Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 text-xs font-medium rounded ${
                            event.type === 'Meeting' ? 'bg-secondary/20 text-secondary-foreground' : 
                            event.type === 'Training' ? 'bg-accent/10 text-accent' :
                            event.type === 'Community' ? 'bg-green-100 text-green-700' :
                            'bg-blue-100 text-blue-700'
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
                      <button 
                        onClick={() => downloadICS(event)}
                        className="btn-outline text-sm py-2 px-4 text-foreground border-border hover:border-secondary hover:text-secondary"
                      >
                        <Download size={16} />
                        Add to Calendar
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-6">
                <div className="card-union p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-foreground">
                    <Calendar size={20} className="text-secondary" />
                    Regular Meetings
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Branch meetings are held on the <strong className="text-foreground">first Wednesday</strong> of each month at <strong className="text-foreground">7:00 PM</strong>.
                  </p>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">6900 Baker Blvd</p>
                    <p className="text-sm text-muted-foreground">Fort Worth, TX 76118</p>
                  </div>
                </div>

                <div className="card-union p-6 bg-secondary/10">
                  <h3 className="font-bold text-lg mb-2 text-foreground">All Members Welcome</h3>
                  <p className="text-sm text-muted-foreground">
                    We encourage all letter carriers to attend monthly meetings. Stay informed, get involved, and have your voice heard.
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

export default CalendarPage;
