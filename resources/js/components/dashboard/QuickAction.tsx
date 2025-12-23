import { LucideIcon } from "lucide-react";

interface ActionProps {
    icon: LucideIcon;
    label: string;
    color: string;
}

export const QuickActions = ({ actions }: { actions: ActionProps[] }) => (
    <div className="">
        <h2 className="text-gray-900 font-semibold mb-6">Quick Actions</h2>

        <div className="grid grid-cols-1 gap-3">
            {actions.map((action, index) => (
                <button
                    key={index}
                    className="w-full flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all border border-gray-100 group"
                >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform shrink-0`}>
                        <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-900 font-medium">{action.label}</span>
                </button>
            ))}
        </div>
    </div>
);