import { ArrowRight, Newspaper } from 'lucide-react';
import { NavLink } from '@/components/NavLink';

const updates = [
  {
    id: 1,
    title: 'Contract Talks Progress Report',
    excerpt: 'The national negotiations continue with positive momentum. Key items under discussion include COLA adjustments and workplace safety improvements.',
    date: 'December 6, 2025',
    author: 'Branch President',
    image: null,
  },
  {
    id: 2,
    title: 'Holiday Greetings from Branch 226',
    excerpt: 'Wishing all our members and their families a safe and happy holiday season. Thank you for your dedication to serving Fort Worth.',
    date: 'December 1, 2025',
    author: 'Branch Leadership',
    image: null,
  },
  {
    id: 3,
    title: 'Steward Training Success',
    excerpt: 'Our recent steward training session was a great success with over 40 participants. Thank you to all who attended and contributed.',
    date: 'November 20, 2025',
    author: 'Vice President',
    image: null,
  },
];

export function BlogPreview() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Newspaper size={24} className="text-secondary" />
              <span className="text-secondary font-semibold">Panther City Updates</span>
            </div>
            <h2 className="section-heading text-foreground mb-2">Local News & Updates</h2>
            <p className="text-muted-foreground">The latest from Branch 226 and Fort Worth letter carriers.</p>
          </div>
          <NavLink to="/updates" className="text-secondary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            All Updates <ArrowRight size={18} />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {updates.map((post, index) => (
            <article 
              key={post.id}
              className="card-union overflow-hidden group"
            >
              <div className="h-40 bg-gradient-to-br from-primary/80 to-navy-dark flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary font-bold text-2xl">226</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3">
                  {post.excerpt}
                </p>
                <NavLink 
                  to={`/updates/${post.id}`}
                  className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-secondary hover:gap-2 transition-all"
                >
                  Read More <ArrowRight size={14} />
                </NavLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { updates };
