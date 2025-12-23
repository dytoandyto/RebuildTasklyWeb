import { FolderKanban, Star, MoreVertical, Clock } from "lucide-react";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export const WorkspaceCard = ({ workspace, viewMode }: any) => {
    const isGrid = viewMode === 'grid';

    return (
        <div className={`bg-white border border-gray-100 shadow-sm transition-all hover:shadow-md
            ${isGrid
                ? 'rounded-2xl p-6 flex flex-col h-full' // Layout vertikal untuk grid
                : 'rounded-xl p-4 flex flex-row items-center justify-between gap-6 h-24' // Layout horizontal untuk list
            }`}
        >
            {/* Bagian 1: Ikon & Nama */}
            <div className={`flex items-center gap-4 ${isGrid ? 'mb-4' : 'w-1/4 min-w-[200px]'}`}>
                <div className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${workspace.gradient} flex items-center justify-center shadow-lg`}>
                    <FolderKanban className="w-6 h-6 text-white" />
                </div>
                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900 truncate">{workspace.name}</span>
                        {workspace.isFavorite && <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />}
                    </div>
                    <p className="text-[10px] uppercase font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full w-fit mt-1">
                        {workspace.status}
                    </p>
                </div>
            </div>

            {/* Bagian 2: Deskripsi (Hanya muncul di Grid atau List dengan pembatas lebar) */}
            {isGrid ? (
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{workspace.description}</p>
            ) : (
                <p className="hidden xl:block text-gray-400 text-xs w-1/4 line-clamp-1">{workspace.description}</p>
            )}

            {/* Bagian 3: Progress Bar */}
            <div className={`${isGrid ? 'mb-6' : 'w-40 shrink-0'}`}>
                <div className="flex justify-between text-[10px] text-gray-500 mb-1 font-medium">
                    <span>Progress</span>
                    <span>{workspace.progress}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className={`h-full ${workspace.color} transition-all duration-500`}
                        style={{ width: `${workspace.progress}%` }}
                    />
                </div>
            </div>

            {/* Bagian 4: Members & Last Activity */}
            <div className={`flex items-center justify-between ${!isGrid && 'w-1/3 gap-6'}`}>
                {/* Avatar Group */}
                <div className="flex items-center -space-x-2 shrink-0">
                    {workspace.members.slice(0, 3).map((m: any, i: number) => (
                        <ImageWithFallback key={i} src={m.avatar} alt={m.name} className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" />
                    ))}
                    {workspace.totalMembers > 3 && (
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[10px] font-bold border-2 border-white text-gray-500">
                            +{workspace.totalMembers - 3}
                        </div>
                    )}
                </div>

                {/* Last Activity */}
                <div className="flex items-center gap-2 text-xs text-gray-400 shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="whitespace-nowrap">{workspace.lastActivity}</span>
                </div>

                {/* Tombol Opsi (Hanya List) */}
                {!isGrid && (
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400">
                        <MoreVertical className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
};