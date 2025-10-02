import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ChatSimulation from "@/components/chat-simulation";
import BenefitsSection from "@/components/benefits-section";
import HowItWorksSection from "@/components/how-it-works-section";
import TestimonialsSection from "@/components/testimonials-section";
import TeamSection from "@/components/team-section";
import FAQSection from "@/components/faq-section";
import WaitlistSection from "@/components/waitlist-section";
import FinalCTASection from "@/components/final-cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <ChatSimulation />
      <BenefitsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <TeamSection />
      <FAQSection />
      <WaitlistSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
