import { SectionShell } from "@/components/ui/section-shell";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
    return (
        <SectionShell className="bg-gradient-to-r from-brand-orange to-brand-coral text-white text-center">
            <div className="mx-auto max-w-3xl">
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                    Ready to Future-Proof Your Business?
                </h2>
                <p className="mb-10 text-lg text-white/90">
                    Join hundreds of Los Angeles businesses preparing for the next decade of growth.
                </p>
                <Button asChild size="lg" className="bg-white text-brand-orange hover:bg-slate-100">
                    <Link href="#contact">Get Started Now</Link>
                </Button>
            </div>
        </SectionShell>
    );
}
