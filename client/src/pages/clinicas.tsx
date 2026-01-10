import { Link } from "wouter";
import { Footer } from "@/components/footer";
import { ClinicasHero } from "@/components/clinicas/clinicas-hero";
import { ClinicasProblem } from "@/components/clinicas/clinicas-problem";
import { ClinicasOpportunity } from "@/components/clinicas/clinicas-opportunity";
import { ClinicasSolution } from "@/components/clinicas/clinicas-solution";
import { ClinicasPartnership } from "@/components/clinicas/clinicas-partnership";
import { ClinicasResults } from "@/components/clinicas/clinicas-results";
import { ClinicasProfile } from "@/components/clinicas/clinicas-profile";
import { ClinicasForm } from "@/components/clinicas/clinicas-form";
import { ClinicasFounder } from "@/components/clinicas/clinicas-founder";

// Simple navbar for /clinicas page - just logo, no other links
function SimpleNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 py-4">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <span className="text-2xl font-serif font-bold tracking-tight text-foreground hover:opacity-80 transition-opacity cursor-pointer">
            LYVE
          </span>
        </Link>
        <a
          href="#formulario"
          className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
        >
          Fale Conosco
        </a>
      </div>
    </nav>
  );
}

export default function Clinicas() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <SimpleNavbar />
      <main>
        <ClinicasHero />
        <ClinicasProblem />
        <ClinicasOpportunity />
        <ClinicasSolution />
        <ClinicasPartnership />
        <ClinicasResults />
        <ClinicasProfile />
        <ClinicasForm />
        <ClinicasFounder />
      </main>
      <Footer />
    </div>
  );
}
