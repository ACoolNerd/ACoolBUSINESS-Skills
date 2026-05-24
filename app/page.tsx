import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ResourcesSection } from "@/components/resources-section";
import { CertificationSection } from "@/components/certification-section";
import { SubcontractorSection } from "@/components/subcontractor-section";
import { DashboardSection } from "@/components/dashboard-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <AboutSection />
      <ResourcesSection />
      <CertificationSection />
      <SubcontractorSection />
      <DashboardSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
