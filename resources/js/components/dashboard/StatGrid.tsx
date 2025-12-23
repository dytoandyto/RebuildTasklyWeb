import { ArrowUpRight, LucideIcon } from "lucide-react";

interface StatProps {
    title: string;
    value: string;
    change: string;
    icon: LucideIcon;
    color: string;
}

export const StatsGrid = ({ stats }: { stats: StatProps[] }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all">
                <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                        <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-gray-600 text-sm mb-1">{stat.title}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-green-600">{stat.change}</div>
            </div>
        ))}
    </div>
);