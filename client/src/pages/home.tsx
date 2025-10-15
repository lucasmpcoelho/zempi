import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import { Suspense, lazy } from "react";
const FoodScannerSection = lazy(() => import("@/components/food-scanner-section"));
const ChatSimulation = lazy(() => import("@/components/chat-simulation"));
import BenefitsSection from "@/components/benefits-section";
import GamificationSection from "@/components/gamification-section";
import HowItWorksSection from "@/components/how-it-works-section";
import SocialProofSection from "@/components/social-proof-section";
import TestimonialsSection from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import WaitlistSection from "@/components/waitlist-section";
import Footer from "@/components/footer";
import StickyCTA from "@/components/sticky-cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      <HeroSection />
      <Suspense fallback={<div />}> 
        <FoodScannerSection />
      </Suspense>
      <Suspense fallback={<div />}> 
        <ChatSimulation />
      </Suspense>
      <BenefitsSection />
      <GamificationSection />
      <HowItWorksSection />
      <SocialProofSection />
      <TestimonialsSection />
      <FAQSection />
      <WaitlistSection />
      <Footer />
      <StickyCTA />
    </div>
  );
}
