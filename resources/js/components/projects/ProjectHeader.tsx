import { Plus, FolderKanban, CheckCircle, Users, TrendingUp, Clock, AlertCircle } from "lucide-react";
import { Button } from "@headlessui/react";

export const ProjectHeader = ({ totalProjects,totalInProgress, totalCompleted, totalOverdue }: any) => (
    <div className="mb-8">
        <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Project Management</h1>
                <p className="text-gray-500">Manage and track all your team projects</p>
            </div>
            <Button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 hover:shadow-lg text-white rounded-xl transition-all">
                <Plus className="w-4 h-4 mr-2" /> Create Project
            </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard icon={FolderKanban} label="Total Projects" value={totalProjects} color="from-purple-400 to-purple-500" />
            <StatCard icon={Clock} label="In Progress" value={totalInProgress} color="from-blue-400 to-blue-500" />
            <StatCard icon={CheckCircle} label="Completed" value={totalCompleted} color="from-green-400 to-green-500" />
            <StatCard icon={AlertCircle} label="Overdue" value={totalOverdue} color="from-pink-400 to-pink-500" />
        </div>
    </div>
);

const StatCard = ({ icon: Icon, label, value, color, }: any) => (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-4">
        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
            <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
            <div className="text-xs text-gray-500 font-medium">{label}</div>
            <div className="text-lg font-bold text-gray-900">{value}</div>
        </div>
    </div>
);

const stats = [
    {
        title: "Total Projects",
        value: "24",
        change: "+3 this month",
        icon: FolderKanban,
        color: "from-purple-400 to-purple-500"
    },
];