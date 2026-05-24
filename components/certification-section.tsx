import { SectionShell } from "@/components/ui/section-shell";
import { Award, CheckSquare, FileBadge, ShieldCheck } from "lucide-react";

const steps = [
    {
        title: "Register",
        description: "Create your business profile in the ecosystem portal.",
        icon: FileBadge,
    },
    {
        title: "Verify",
        description: "Submit documentation to verify your local business status.",
        icon: CheckSquare,
    },
    {
        title: "Train",
        description: "Complete the required AI and compliance training modules.",
        icon: Award,
    },
    {
        title: "Certify",
        description: "Receive your official LA28-Ready certification badge.",
        icon: ShieldCheck,
    },
];

export function CertificationSection() {
    return (
        <SectionShell id="certification" className="bg-white">
            <div className="mx-auto max-w-3xl text-center mb-16">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-deepBlue md:text-4xl">
                    Certification Pathway
                </h2>
                <p className="text-lg text-slate-600">
                    Become a verified partner and unlock exclusive opportunities.
                </p>
            </div>

            <div className="relative">
                {/* Connector Line (Desktop) */}
                <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 border-t-2 border-dashed border-slate-200 hidden lg:block" />

                <div className="grid gap-8 lg:grid-cols-4 relative">
                    {steps.map((step, index) => (
                        <div key={step.title} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative text-center">
                            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-deepBlue text-white shadow-lg ring-4 ring-white">
                                <step.icon className="h-8 w-8" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold text-slate-900">{step.title}</h3>
                            <p className="text-sm text-slate-600">{step.description}</p>

                            {/* Step Number */}
                            <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-brand-gold text-brand-deepBlue font-bold flex items-center justify-center shadow-sm">
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionShell>
    );
}
