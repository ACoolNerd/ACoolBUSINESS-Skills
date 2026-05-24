import { SectionShell } from "@/components/ui/section-shell";
import { BookOpen, Cpu, Users, Zap } from "lucide-react";

const resources = [
    {
        title: "AI Readiness Toolkit",
        description: "Self-assessment tools and guides to evaluate your business's AI maturity.",
        icon: Cpu,
    },
    {
        title: "Procurement Guides",
        description: "Step-by-step documentation on how to bid for LA28 contracts.",
        icon: BookOpen,
    },
    {
        title: "Expert Workshops",
        description: "Weekly sessions with industry leaders on digital transformation.",
        icon: Users,
    },
    {
        title: "Tech Grants",
        description: "Information on available funding for technology upgrades.",
        icon: Zap,
    },
];

export function ResourcesSection() {
    return (
        <SectionShell id="resources" className="bg-brand-lightGray">
            <div className="mx-auto max-w-3xl text-center mb-16">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-deepBlue md:text-4xl">
                    Resources to Scale Your Business
                </h2>
                <p className="text-lg text-slate-600">
                    Everything you need to modernize your operations and compete for major contracts.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {resources.map((resource) => (
                    <div key={resource.title} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                            <resource.icon className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-slate-900">{resource.title}</h3>
                        <p className="text-slate-600">{resource.description}</p>
                    </div>
                ))}
            </div>
        </SectionShell>
    );
}
