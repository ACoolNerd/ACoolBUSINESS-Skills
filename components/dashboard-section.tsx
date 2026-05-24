import { SectionShell } from "@/components/ui/section-shell";
import { TrendingUp, Users, Award, Building2 } from "lucide-react";

// Mock Data - In the future, fetch this from Supabase
// Example Supabase query:
// const { data, error } = await supabase.from('ecosystem_metrics').select('*').single();
const metrics = {
    businessCount: 1250,
    certificationsIssued: 840,
    readySubcontractors: 320,
    economicImpact: "$45M",
    regions: [
        { name: "San Fernando Valley", count: 450, percentage: 75 },
        { name: "Downtown LA", count: 320, percentage: 60 },
        { name: "West LA", count: 280, percentage: 45 },
        { name: "South LA", count: 200, percentage: 30 },
    ]
};

export function DashboardSection() {
    return (
        <SectionShell id="dashboard" className="bg-brand-lightGray">
            <div className="mx-auto max-w-3xl text-center mb-16">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-deepBlue md:text-4xl">
                    Ecosystem Impact
                </h2>
                <p className="text-lg text-slate-600">
                    Real-time insights into the growth and readiness of the local business community.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
                <StatCard
                    title="Active Businesses"
                    value={metrics.businessCount.toLocaleString()}
                    icon={Building2}
                    trend="+12% this month"
                />
                <StatCard
                    title="Certifications"
                    value={metrics.certificationsIssued.toLocaleString()}
                    icon={Award}
                    trend="+5% this month"
                />
                <StatCard
                    title="LA28 Ready"
                    value={metrics.readySubcontractors.toLocaleString()}
                    icon={Users}
                    trend="+8% this month"
                />
                <StatCard
                    title="Economic Impact"
                    value={metrics.economicImpact}
                    icon={TrendingUp}
                    trend="Projected Growth"
                />
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Regional Participation</h3>
                <div className="space-y-6">
                    {metrics.regions.map((region) => (
                        <div key={region.name}>
                            <div className="flex justify-between mb-2">
                                <span className="font-medium text-slate-700">{region.name}</span>
                                <span className="text-slate-500">{region.count} Businesses</span>
                            </div>
                            <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-brand-teal rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${region.percentage}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionShell>
    );
}

function StatCard({ title, value, icon: Icon, trend }: { title: string, value: string, icon: any, trend: string }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
                <span className="text-slate-500 font-medium">{title}</span>
                <div className="p-2 bg-brand-lightGray rounded-lg text-brand-deepBlue">
                    <Icon className="h-5 w-5" />
                </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-1">{value}</div>
            <div className="text-xs text-brand-teal font-medium">{trend}</div>
        </div>
    );
}
