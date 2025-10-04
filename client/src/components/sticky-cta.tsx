import { Button } from "@/components/ui/button";

export default function StickyCTA() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 12px)' }}
      role="region"
      aria-label="Sticky mobile call to action"
    >
      <div className="max-w-7xl mx-auto px-4 pt-2">
        <Button
          size="lg"
          className="w-full"
          variant="default"
          onClick={scrollToWaitlist}
          data-testid="sticky-cta-join-waitlist"
        >
          Entrar na Lista de Espera
        </Button>
      </div>
    </div>
  );
}


