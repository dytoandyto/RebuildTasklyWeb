import { MoreVertical, FolderKanban, CheckCircle, Users, Calendar, Clock } from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export const ProjectCard = ({ project, viewMode }: any) => {
    const isGrid = viewMode === "grid";

    // Logika Warna Status
    const statusStyles: any = {
        "in-progress": "bg-blue-50 text-blue-700 border-blue-100",
        "completed": "bg-green-50 text-green-700 border-green-100",
        "planning": "bg-purple-50 text-purple-700 border-purple-100",
        "overdue": "bg-red-50 text-red-700 border-red-100"
    };

    if (!isGrid) {
        // --- TAMPILAN LIST (BARIS) ---
        return (
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-6 group">
                <div className="flex items-center gap-4 w-1/4 min-w-[200px]">
                    <div className={`w-10 h-10 ${project.color} rounded-xl flex items-center justify-center shadow-md shrink-0`}>
                        <FolderKanban className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0">
                        <h3 className="font-bold text-gray-900 truncate">{project.name}</h3>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusStyles[project.status]}`}>
                            {project.status.replace('-', ' ')}
                        </span>
                    </div>
                </div>

                <div className="flex-1 hidden md:block">
                    <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden w-full max-w-[150px]">
                        <div className={`h-full ${project.color}`} style={{ width: `${project.progress}%` }} />
                    </div>
                </div>

                <div className="flex items-center gap-3 w-40 shrink-0">
                    <ImageWithFallback src={project.manager.avatar} className="w-7 h-7 rounded-full border" />
                    <span className="text-xs text-gray-700 font-medium truncate">{project.manager.name}</span>
                </div>

                <div className="flex items-center gap-4 w-32 shrink-0 text-xs text-gray-500">
                    <div className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" /> {project.tasks.completed}</div>
                    <div className="flex items-center gap-1 font-bold italic uppercase">{project.priority}</div>
                </div>

                <button className="p-2 hover:bg-gray-100 rounded-lg"><MoreVertical className="w-4 h-4 text-gray-400" /></button>
            </div>
        );
    }

    // --- TAMPILAN GRID (KOTAK) ---
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col group">
            <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <FolderKanban className="w-6 h-6 text-white" />
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${statusStyles[project.status]}`}>
                    {project.status.replace('-', ' ')}
                </span>
            </div>

            <h3 className="font-bold text-gray-900 mb-1">{project.name}</h3>
            <p className="text-sm text-gray-500 line-clamp-2 mb-4">{project.description}</p>

            <div className="mt-auto">
                <div className="flex justify-between text-xs mb-2">
                    <span className="text-gray-500">Progress</span>
                    <span className="font-bold">{project.progress}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                    <div className={`h-full ${project.color}`} style={{ width: `${project.progress}%` }} />
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-2">
                        <ImageWithFallback src={project.manager.avatar} className="w-8 h-8 rounded-full" />
                        <span className="text-xs font-semibold">{project.manager.name}</span>
                    </div>
                    <div className="text-[10px] text-gray-400 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {project.deadline}
                    </div>
                </div>
            </div>
        </div>
    );
};