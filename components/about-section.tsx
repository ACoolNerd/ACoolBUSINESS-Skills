import { SectionShell } from "@/components/ui/section-shell";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const benefits = [
    "Access to LA28 procurement opportunities",
    "AI readiness assessment and training",
    "Networking with prime contractors",
    "Digital transformation support",
];

export function AboutSection() {
    return (
        <SectionShell id="about" className="bg-white">
            <div className="grid gap-12 md:grid-cols-2 items-center">
                <div>
                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-brand-deepBlue md:text-4xl">
                        Bridging the Gap Between Local Business & Global Opportunity
                    </h2>
                    <p className="mb-6 text-lg text-slate-600">
                        The AI Business Ecosystem is a civic-innovation initiative designed to prepare San Fernando Valley businesses for the massive economic opportunities of the 2028 Olympics and the AI revolution.
                    </p>
                    <ul className="space-y-4">
                        {benefits.map((benefit) => (
                            <li key={benefit} className="flex items-center gap-3">
                                <CheckCircle2 className="h-6 w-6 text-brand-teal" />
                                <span className="text-slate-700">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
                    <Image
                        src="/about.png"
                        alt="Diverse team collaborating in a modern LA office"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
        </SectionShell>
    );
}
