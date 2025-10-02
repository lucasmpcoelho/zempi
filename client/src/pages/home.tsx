import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ChatSimulation from "@/components/chat-simulation";
import BenefitsSection from "@/components/benefits-section";
import SocialProofSection from "@/components/social-proof-section";
import HowItWorksSection from "@/components/how-it-works-section";
import TestimonialsSection from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import WaitlistSection from "@/components/waitlist-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      <HeroSection />
      <ChatSimulation />
      <BenefitsSection />
      <SocialProofSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FAQSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}
