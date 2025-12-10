import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ArrowRight, Newspaper, Calendar, User } from 'lucide-react';
import { NavLink } from '@/components/NavLink';

const updates = [
  {
    id: 1,
    title: 'Contract Talks Progress Report',
    content: 'The national negotiations continue with positive momentum. Key items under discussion include COLA adjustments and workplace safety improvements. Our national leadership remains focused on securing the best possible contract for all letter carriers. We will continue to provide updates as negotiations progress. Members are encouraged to attend branch meetings for detailed information and to ask questions about the negotiation process.',
    date: 'December 6, 2025',
    author: 'Branch President',
  },
  {
    id: 2,
    title: 'Holiday Greetings from Branch 226',
    content: 'Wishing all our members and their families a safe and happy holiday season. Thank you for your dedication to serving Fort Worth. As we approach the busiest time of year for mail delivery, we want to acknowledge the hard work and commitment of every letter carrier. Your service to our community is invaluable. Please remember to take care of yourselves during this demanding season.',
    date: 'December 1, 2025',
    author: 'Branch Leadership',
  },
  {
    id: 3,
    title: 'Steward Training Success',
    content: 'Our recent steward training session was a great success with over 40 participants. Thank you to all who attended and contributed. The training covered grievance procedures, contract interpretation, and member representation. We are proud to have such dedicated stewards serving our membership. Additional training sessions will be scheduled in the coming months.',
    date: 'November 20, 2025',
    author: 'Vice President',
  },
  {
    id: 4,
    title: 'Community Food Drive Results',
    content: 'Branch 226 letter carriers collected over 50,000 pounds of food during our recent community food drive. This incredible effort will help feed families across the Fort Worth area. Thank you to everyone who participated and to the community members who donated. Your generosity makes a real difference in the lives of those in need.',
    date: 'November 15, 2025',
    author: 'Community Service Chair',
  },
  {
    id: 5,
    title: 'New Member Orientation',
    content: 'We welcomed 25 new members at our orientation session last week. These new letter carriers are joining our proud tradition of service. We encourage all members to welcome our new colleagues and help them as they begin their careers. Mentorship is one of the most valuable things we can offer to those just starting out.',
    date: 'November 10, 2025',
    author: 'Secretary',
  },
];

const Updates = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-4">
                <Newspaper size={24} className="text-secondary" />
                <span className="text-secondary font-semibold">Panther City Updates</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Local News & Updates</h1>
              <p className="text-xl text-primary-foreground/70">
                The latest from Branch 226 and Fort Worth letter carriers.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-8">
              {updates.map((post) => (
                <article 
                  key={post.id}
                  className="card-union overflow-hidden"
                >
                  <div className="h-32 bg-gradient-to-br from-primary/80 to-navy-dark flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="text-secondary font-bold text-3xl">226</span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={14} /> {post.author}
                      </span>
                    </div>
                    <h2 className="font-bold text-2xl text-foreground mb-4">{post.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{post.content}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Updates;
