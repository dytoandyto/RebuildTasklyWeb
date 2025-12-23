import { Search, Filter, Grid3x3, List } from "lucide-react";
import { Input, Button } from "@headlessui/react";

export const WorkspaceControls = ({ viewMode, setViewMode, searchQuery, setSearchQuery }: any) => (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white rounded-xl p-3 shadow-sm border border-gray-100 mb-6">
        <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
                type="text"
                placeholder="Search workspaces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 h-10 rounded-xl border-none bg-gray-50 focus:ring-2 focus:ring-purple-200 transition-all text-sm"
            />
        </div>
        <div className="flex items-center gap-3 shrink-0">
            <Button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-medium hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" /> Filters
            </Button>
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
                <ViewToggle active={viewMode === 'grid'} onClick={() => setViewMode('grid')} icon={Grid3x3} />
                <ViewToggle active={viewMode === 'list'} onClick={() => setViewMode('list')} icon={List} />
            </div>
        </div>
    </div>
);

const ViewToggle = ({ active, onClick, icon: Icon }: any) => (
    <button
        onClick={onClick}
        className={`p-2 rounded-lg transition-all ${active ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}
    >
        <Icon className="w-4 h-4" />
    </button>
);