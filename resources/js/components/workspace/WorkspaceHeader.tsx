import { Plus, FolderKanban, CheckCircle, Users, TrendingUp } from "lucide-react";
import { Button } from "@headlessui/react";

export const WorkspaceHeader = ({ totalWorkspaces, activeProjects, totalMembers, avgProgress }: any) => (
    <div className="mb-8">
        <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">Workspaces</h1>
                <p className="text-gray-500">Manage and organize all your team workspaces</p>
            </div>
            <Button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 hover:shadow-lg text-white rounded-xl transition-all">
                <Plus className="w-4 h-4 mr-2" /> Create Workspace
            </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <StatCard icon={FolderKanban} label="Total Workspaces" value={totalWorkspaces} color="from-purple-400 to-purple-500" />
            <StatCard icon={CheckCircle} label="Active Projects" value={activeProjects} color="from-green-400 to-green-500" />
            <StatCard icon={Users} label="Total Members" value={totalMembers} color="from-blue-400 to-blue-500" />
            <StatCard icon={TrendingUp} label="Avg Completion" value={`${avgProgress}%`} color="from-pink-400 to-pink-500" />
        </div>
    </div>
);

const StatCard = ({ icon: Icon, label, value, color }: any) => (
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