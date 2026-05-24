import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-deepBlue via-brand-deepBlue to-brand-orange pb-16 pt-24 md:pb-32 md:pt-40 lg:pb-40 lg:pt-48">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container relative mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
                        Preparing LA Businesses for <span className="text-brand-gold">LA28</span> & the AI Future
                    </h1>
                    <p className="mb-10 text-lg text-slate-200 md:text-xl">
                        Join the ecosystem of certified, AI-ready businesses in the San Fernando Valley.
                        Secure contracts, optimize operations, and lead the way.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button asChild size="lg" variant="cta" className="w-full sm:w-auto">
                            <Link href="#contact">
                                Join the Ecosystem <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="w-full sm:w-auto border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm">
                            <Link href="#about">Learn More</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-px left-0 right-0 h-20 bg-gradient-to-t from-brand-lightGray to-transparent" />
        </section>
    );
}
