import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-brand-deepBlue py-12 text-slate-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">AI Business Ecosystem</h3>
                        <p className="text-sm text-slate-400">
                            Empowering Los Angeles businesses for the future economy.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Platform
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#about" className="hover:text-white">About</Link></li>
                            <li><Link href="#resources" className="hover:text-white">Resources</Link></li>
                            <li><Link href="#certification" className="hover:text-white">Certification</Link></li>
                            <li><Link href="#dashboard" className="hover:text-white">Dashboard</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Legal
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                            Contact
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>info@aibusinessla.com</li>
                            <li>Los Angeles, CA</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-400">
                    © {new Date().getFullYear()} AI Business Ecosystem. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
