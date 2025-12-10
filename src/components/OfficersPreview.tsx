import { Shield, Award, Users, Briefcase, Heart, Gavel } from 'lucide-react';

const officers = [
  { name: 'Michael Barrett', title: 'President', icon: Shield },
  { name: 'Christi Fite', title: 'Vice President', icon: Award },
  { name: 'Doyle "Buck" Langston', title: 'Secretary', icon: Briefcase },
  { name: 'Steven Vasquez', title: 'Treasurer', icon: Briefcase },
  { name: 'Sharon Rucker', title: 'HBR/MBA Rep', icon: Heart },
  { name: 'Miranda Miller', title: 'Dir. of Retirees', icon: Gavel },
];

export function OfficersPreview() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <div className="red-stripe mx-auto mb-4" />
          <h2 className="section-heading text-foreground mb-4">Branch Leadership</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our dedicated officers work tirelessly to represent and support the letter carriers of Fort Worth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {officers.map((officer, index) => (
            <div 
              key={officer.name}
              className="card-union p-6 flex items-center gap-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <officer.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{officer.name}</h3>
                <p className="text-sm text-muted-foreground">{officer.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/officers" className="btn-primary">
            View All Officers
          </a>
        </div>
      </div>
    </section>
  );
}

export { officers };
