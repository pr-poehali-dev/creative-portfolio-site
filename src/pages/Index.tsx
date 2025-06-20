import Hero from "@/components/Hero";
import MusicSection from "@/components/MusicSection";
import LeadershipSection from "@/components/LeadershipSection";
import AwardsSection from "@/components/AwardsSection";
import ContactsSection from "@/components/ContactsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <MusicSection />
      <LeadershipSection />
      <AwardsSection />
      <ContactsSection />
    </div>
  );
};

export default Index;
