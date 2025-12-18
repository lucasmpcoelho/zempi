import { Navbar } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/sections/about";
import { MarketWave } from "@/components/sections/market";
import { Technology } from "@/components/sections/tech";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MarketWave />
        <Technology />
      </main>
      <Footer />
    </div>
  );
}
