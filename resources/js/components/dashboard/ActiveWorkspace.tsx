import { MoreVertical, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ActiveWorkspaces = ({ workspaces }: { workspaces: any[] }) => (
    <div className="lg:col-span-2 bg-white rounded-2xl p-6  border border-gray-100">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Active Workspaces</h2>
            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">View All</Button>
        </div>
        <div className="space-y-4">
            {workspaces.map((workspace, index) => (
                <div key={index} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 ${workspace.color} rounded-full`}></div>
                            <span className="font-medium text-gray-900">{workspace.name}</span>
                        </div>
                        <button className="p-1 hover:bg-gray-200 rounded-lg"><MoreVertical className="w-4 h-4 text-gray-400" /></button>
                    </div>
                    <div className="flex items-center gap-6 mb-3 text-sm text-gray-600">
                        <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" /> {workspace.completed}/{workspace.tasks} tasks</div>
                        <div className="flex items-center gap-2"><Users className="w-4 h-4" /> {workspace.members} members</div>
                    </div>
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className={`absolute h-full ${workspace.color}`} style={{ width: `${workspace.progress}%` }}></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);