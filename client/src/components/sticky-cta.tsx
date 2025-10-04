import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export default function StickyCTA() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const lastScrollYRef = useRef(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('section');
    const threshold = (hero?.clientHeight ?? 400) * 0.5;

    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollYRef.current;
      const pastHero = currentY > threshold;
      setVisible(scrollingDown && pastHero);
      lastScrollYRef.current = currentY;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70 transition-transform duration-200 ${visible ? 'translate-y-0' : 'translate-y-full'}`}
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


