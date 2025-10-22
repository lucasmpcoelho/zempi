import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import { Suspense, lazy } from "react";
import SocialProofSection from "@/components/social-proof-section";
const OldNewComparisonSection = lazy(() => import("@/components/old-new-comparison-section"));
const ChatSimulation = lazy(() => import("@/components/chat-simulation"));
const InsightsSection = lazy(() => import("@/components/insights-section"));
import HowItWorksSection from "@/components/how-it-works-section";
const ClinicalAuthoritySection = lazy(() => import("@/components/clinical-authority-section"));
import TestimonialsSection from "@/components/testimonials-section";
import PricingSection from "@/components/pricing-section";
import FAQSection from "@/components/faq-section";
import WaitlistSection from "@/components/waitlist-section";
import Footer from "@/components/footer";
import StickyCTA from "@/components/sticky-cta";

function SectionLoader() {
  return (
    <div className="py-24 bg-white animate-pulse">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4" />
        <div className="h-4 bg-gray-100 rounded w-1/2 mx-auto mb-12" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="h-64 bg-gray-100 rounded-2xl" />
          <div className="h-64 bg-gray-100 rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navigation />
      <HeroSection />
      <Suspense fallback={<SectionLoader />}>
        <div className="content-auto">
          <OldNewComparisonSection />
        </div>
      </Suspense>
      <div className="content-auto">
        <SocialProofSection />
      </div>
      <Suspense fallback={<SectionLoader />}> 
        <div className="content-auto">
          <ChatSimulation />
        </div>
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <div className="content-auto">
          <InsightsSection />
        </div>
      </Suspense>
      <HowItWorksSection />
      <Suspense fallback={<SectionLoader />}>
        <div className="content-auto">
          <ClinicalAuthoritySection />
        </div>
      </Suspense>
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      {/* WhatsIncludedSection removed for a more streamlined mobile-first flow */}
      <WaitlistSection />
      <Footer />
      <StickyCTA />
    </div>
  );
}
