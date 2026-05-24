import { SectionShell } from "@/components/ui/section-shell";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function SubcontractorSection() {
    return (
        <SectionShell id="subcontractors" className="bg-brand-deepBlue text-white">
            <div className="grid gap-12 md:grid-cols-2 items-center">
                <div className="order-2 md:order-1">
                    <div className="relative aspect-square overflow-hidden rounded-2xl shadow-2xl border-4 border-white/10">
                        <Image
                            src="/subcontractor.png"
                            alt="Construction manager reviewing plans with LA skyline"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Prepare for LA28 Subcontracting
                    </h2>
                    <p className="mb-6 text-lg text-slate-200">
                        Major infrastructure projects require a diverse supply chain. Ensure your business meets the compliance, insurance, and capability requirements to serve as a prime subcontractor.
                    </p>
                    <div className="space-y-4 mb-8">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <h3 className="font-bold text-brand-gold mb-1">Capacity Building</h3>
                            <p className="text-sm text-slate-300">Scale your operations to handle large-volume contracts.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                            <h3 className="font-bold text-brand-gold mb-1">Compliance Ready</h3>
                            <p className="text-sm text-slate-300">Automated checks for local, state, and federal regulations.</p>
                        </div>
                    </div>
                    <Button asChild variant="cta" size="lg">
                        <Link href="#contact">Check Eligibility</Link>
                    </Button>
                </div>
            </div>
        </SectionShell>
    );
}
