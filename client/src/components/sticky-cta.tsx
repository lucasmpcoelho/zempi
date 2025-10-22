import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    const threshold = (hero?.clientHeight ?? 400) * 0.6;
    const waitlist = document.getElementById('waitlist');
    const formInputs = Array.from(document.querySelectorAll('input, textarea, select')) as HTMLElement[];

    const onScroll = () => {
      const currentY = window.scrollY;
      const scrollingUp = currentY < lastScrollYRef.current;
      const pastHero = currentY > threshold;
      
      // Hide when reaching waitlist section
      const waitlistTop = waitlist?.offsetTop ?? Infinity;
      const nearWaitlist = currentY > (waitlistTop - window.innerHeight * 0.8);
      
      const anyInputFocused = formInputs.some((el) => el === document.activeElement);

      setVisible(
        pastHero &&
        (scrollingUp || currentY < lastScrollYRef.current + 100) &&
        !nearWaitlist &&
        !anyInputFocused
      );
      lastScrollYRef.current = currentY;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const onFocusIn = () => setVisible(false);
    const onFocusOut = () => onScroll();
    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('focusout', onFocusOut);

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur-lg shadow-lg"
          style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 12px)' }}
          role="region"
          aria-label="Sticky mobile call to action"
        >
          <div className="max-w-7xl mx-auto px-4 pt-3">
            <Button
              size="lg"
              className="w-full bg-gray-900 hover:bg-gray-800 rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
              variant="default"
              onClick={scrollToWaitlist}
              data-testid="sticky-cta-join-waitlist"
            >
              Começar por R$32/mês
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


