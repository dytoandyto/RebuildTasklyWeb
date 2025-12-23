import { NavFooter } from '@/components/nav-footer';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { dashboard, workspaces } from '@/routes';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BugIcon, Building2, ChartColumnIncreasing, Clock, FileTextIcon, FolderKanban, LayoutGrid, MessageCircleQuestionIcon, Settings, Shield, SquareCheck, Users, } from 'lucide-react';
import AppLogo from './app-logo';
import { NavMain, NavManagement } from './nav-main';


interface NavItemWithActive extends NavItem {
    active?: boolean;
}

export function AppSidebar() {
    const { auth } = usePage<any>().props;
    const isSuperAdmin = auth.user?.roles?.includes('super-admin');

    const footerNavItems: NavItem[] = [
        { title: 'Settings', href: '/settings', icon: Settings },
        { title: 'Help & Support', href: '/support', icon: MessageCircleQuestionIcon },
    ];

    const mainNavItems: NavItemWithActive[] = [
        { title: 'Dashboard', href: dashboard(), icon: LayoutGrid, active: true },
        { title: 'Workspaces', href: workspaces() , icon: Building2, active: false },
        { title: 'Projects', href: '/projects', icon: FolderKanban, active: false },
        { title: 'Tasks', href: '/tasks', icon: SquareCheck, active: false },
        { title: 'Teams', href: '/teams', icon: Users, active: false },
    ];

    const managementNavItems: NavItemWithActive[] = [
        { title: 'Bug & Request', href: '/bug-request', icon: BugIcon, active: false },
        { title: 'Timesheets', href: '/timesheets', icon: Clock, active: false },
        { title: 'Reports', href: '/reports', icon: ChartColumnIncreasing, active: false },
        { title: 'Invoices', href: '/invoices', icon: FileTextIcon, active: false }
    ];

    if (isSuperAdmin) {
        mainNavItems.push({ title: 'Access Control', href: '/permissions', icon: Shield, active: false });
    }

    return (
        <Sidebar collapsible="icon" variant="inset" className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0 group">

            <SidebarHeader className='border-b border-gray-100 p-4'>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()}>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="flex-1 overflow-y-auto">
                <NavMain items={mainNavItems} />
                <NavManagement items={managementNavItems} />
            </SidebarContent>

            <SidebarFooter className='p-4 border-t border-gray-100'>
                <NavFooter items={footerNavItems} className="mt-auto" />
            </SidebarFooter>
        </Sidebar>
    );
}