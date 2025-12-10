import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { OfficersPreview } from '@/components/OfficersPreview';
import { AnnouncementsPreview } from '@/components/AnnouncementsPreview';
import { CalendarPreview } from '@/components/CalendarPreview';
import { ResourcesPreview } from '@/components/ResourcesPreview';
import { MemberApps } from '@/components/MemberApps';
import { BlogPreview } from '@/components/BlogPreview';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AnnouncementsPreview />
        <OfficersPreview />
        <CalendarPreview />
        <ResourcesPreview />
        <MemberApps />
        <BlogPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
