import { SectionShell } from "@/components/ui/section-shell";
import { Star } from "lucide-react";

const testimonials = [
    {
        quote: "The certification process was straightforward and opened doors to contracts we never thought possible.",
        author: "Maria Gonzalez",
        role: "CEO, Valley Tech Solutions",
    },
    {
        quote: "This ecosystem provided the roadmap we needed to modernize our manufacturing for the AI era.",
        author: "David Chen",
        role: "Director, Chen Manufacturing",
    },
    {
        quote: "Connecting with other LA28-ready businesses has created incredible partnership opportunities.",
        author: "Sarah Johnson",
        role: "Founder, EcoLogistics",
    },
];

export function TestimonialsSection() {
    return (
        <SectionShell id="testimonials" className="bg-white">
            <div className="mx-auto max-w-3xl text-center mb-16">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-deepBlue md:text-4xl">
                    Success Stories
                </h2>
                <p className="text-lg text-slate-600">
                    Hear from local business leaders transforming their operations.
                </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-brand-lightGray p-8 rounded-2xl relative">
                        <div className="flex gap-1 mb-4 text-brand-gold">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current" />
                            ))}
                        </div>
                        <p className="mb-6 text-slate-700 italic">"{t.quote}"</p>
                        <div>
                            <div className="font-bold text-slate-900">{t.author}</div>
                            <div className="text-sm text-slate-500">{t.role}</div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionShell>
    );
}
