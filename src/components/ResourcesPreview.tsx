import { Heart, Newspaper, Landmark, Briefcase, Users, HandHeart, GraduationCap, ExternalLink } from 'lucide-react';
import { NavLink } from '@/components/NavLink';

const resources = [
  { title: 'Member Benefits', description: 'Health plans, retirement, and more', icon: Heart, href: '/resources#benefits' },
  { title: 'News & Information', description: 'NALC national news and updates', icon: Newspaper, href: '/resources#news' },
  { title: 'Government Affairs', description: 'Legislative action and advocacy', icon: Landmark, href: '/resources#government' },
  { title: 'Workplace Issues', description: 'Grievances, safety, and rights', icon: Briefcase, href: '/resources#workplace' },
  { title: 'Union Administration', description: 'Branch documents and bylaws', icon: Users, href: '/resources#admin' },
  { title: 'Community Service', description: 'Food drives and local initiatives', icon: HandHeart, href: '/resources#community' },
  { title: 'Parker Jr. Scholarship', description: 'Annual scholarship program', icon: GraduationCap, href: '/resources#scholarship' },
];

export function ResourcesPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <div className="red-stripe mx-auto mb-4" />
          <h2 className="section-heading text-foreground mb-4">Member Resources</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access important information, benefits, and tools for NALC members.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {resources.map((resource, index) => (
            <NavLink
              key={resource.title}
              to={resource.href}
              className="card-union p-5 group flex items-start gap-4 hover:border-secondary/50"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                <resource.icon size={22} className="text-secondary" />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-foreground group-hover:text-secondary transition-colors flex items-center gap-1">
                  {resource.title}
                  <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{resource.description}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}

export { resources };
