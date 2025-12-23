import { Breadcrumbs } from '@/components/breadcrumbs';
import { Search, Bell, Settings, ChevronDown } from "lucide-react";
import { SidebarTrigger } from '@/components/ui/sidebar';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { Input } from "./ui/input";
import { NavUser } from './nav-user';

export function AppSidebarHeader({
    breadcrumbs = [],
}: {
    breadcrumbs?: BreadcrumbItemType[];
}) {
    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between sticky top-0 z-10/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            {/* Bagian Kiri: Tambahkan 'flex-1' di div ini untuk memberikan ruang fleksibel */}
            <div className="flex items-center gap-2 flex-1">
                <SidebarTrigger className="-ml-1" />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                
                {/* Search Bar - Diberi 'flex-1' agar memanjang mengisi sisa ruang */}
                <div className="relative flex-1 max-w-lg mx-4"> 
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Search tasks, projects, or team members..."
                        // Ubah 'w-full' agar mengisi penuh parent 'div' yang kini fleksibel
                        className="pl-12 h-10 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-purple-300 w-full" 
                    />
                </div>
            </div>
            {/* Right Side */}
            <div className="flex items-center gap-4 ml-6">
                {/* Notifications */}
                <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors">
                    <Bell className="w-5 h-5 text-gray-600" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Settings */}
                <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                    <Settings className="w-5 h-5 text-gray-600" />
                </button>

                {/* User Profile */}
                <NavUser />
            </div>
        </header>
    );
}