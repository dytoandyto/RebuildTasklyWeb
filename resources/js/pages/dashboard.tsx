import {
    Users,
    FolderKanban,
    CheckCircle,
    TrendingUp,
    Calendar,
    Plus,
} from "lucide-react";
import AppLayout from '@/layouts/app-layout';

import { dashboard } from '@/routes';
import { PERMISSION_CARDS } from '@/data/permission-data';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Page } from '@inertiajs/core';
import { StatsGrid } from "@/components/dashboard/StatGrid";
import { ActiveWorkspaces } from "@/components/dashboard/ActiveWorkspace";
import { QuickActions } from "@/components/dashboard/QuickAction";
import { TeamMembers } from "@/components/dashboard/TeamMembers";
import { RecentTasks } from "@/components/dashboard/RecentTask";

const stats = [
    {
        title: "Active Workspaces",
        value: "12",
        change: "+2 this month",
        trend: "up",
        icon: FolderKanban,
        color: "from-purple-400 to-purple-500"
    },
    {
        title: "Total Members",
        value: "47",
        change: "+5 new members",
        trend: "up",
        icon: Users,
        color: "from-blue-400 to-blue-500"
    },
    {
        title: "Tasks Completed",
        value: "2,847",
        change: "+23% this week",
        trend: "up",
        icon: CheckCircle,
        color: "from-green-400 to-green-500"
    },
    {
        title: "Productivity",
        value: "94%",
        change: "+12% efficiency",
        trend: "up",
        icon: TrendingUp,
        color: "from-pink-400 to-pink-500"
    }
];

const workspaces = [
    {
        name: "Product Development",
        tasks: 45,
        completed: 32,
        members: 12,
        color: "bg-purple-500",
        progress: 71
    },
    {
        name: "Marketing Campaign",
        tasks: 28,
        completed: 24,
        members: 8,
        color: "bg-blue-500",
        progress: 86
    },
    {
        name: "Customer Support",
        tasks: 34,
        completed: 18,
        members: 15,
        color: "bg-green-500",
        progress: 53
    },
    {
        name: "Design System",
        tasks: 22,
        completed: 20,
        members: 6,
        color: "bg-pink-500",
        progress: 91
    }
];

const recentTasks = [
    {
        title: "Redesign landing page hero section",
        workspace: "Product Development",
        assignee: {
            name: "Michael Chen",
            avatar: "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjM5MjIyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        priority: "high",
        dueDate: "Today",
        status: "in-progress"
    },
    {
        title: "Update user authentication flow",
        workspace: "Product Development",
        assignee: {
            name: "Emma Rodriguez",
            avatar: "https://images.unsplash.com/photo-1610896011476-300d6239d995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjM5NTc4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        priority: "medium",
        dueDate: "Tomorrow",
        status: "pending"
    },
    {
        title: "Create social media content calendar",
        workspace: "Marketing Campaign",
        assignee: {
            name: "James Wilson",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mzg5MjIyNHww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        priority: "low",
        dueDate: "Dec 2",
        status: "completed"
    },
    {
        title: "Fix bug in notification system",
        workspace: "Product Development",
        assignee: {
            name: "Sarah Mitchell",
            avatar: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mzg1MzA3MXww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        priority: "high",
        dueDate: "Today",
        status: "in-progress"
    }
];

const quickActions = [
    { icon: Plus, label: "Create Task", color: "from-purple-500 to-pink-500" },
    { icon: Users, label: "Invite Member", color: "from-blue-500 to-cyan-500" },
    { icon: FolderKanban, label: "New Workspace", color: "from-green-500 to-emerald-500" },
    { icon: Calendar, label: "Schedule Meeting", color: "from-orange-500 to-amber-500" }
];

const teamMembers = [
    {
        name: "Michael Chen",
        role: "Team Lead",
        avatar: "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjM5MjIyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        tasks: 12,
        online: true
    },
    {
        name: "Emma Rodriguez",
        role: "Product Manager",
        avatar: "https://images.unsplash.com/photo-1610896011476-300d6239d995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjM5NTc4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        tasks: 8,
        online: true
    },
    {
        name: "James Wilson",
        role: "Designer",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mzg5MjIyNHww&ixlib=rb-4.1.0&q=80&w=1080",
        tasks: 15,
        online: false
    },
    {
        name: "Sarah Mitchell",
        role: "Company Owner",
        avatar: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mzg1MzA3MXww&ixlib=rb-4.1.0&q=80&w=1080",
        tasks: 6,
        online: true
    }
];

interface DashboardProps extends Page {
    auth: {
        user: {
            name: string;
            email: string;
            company?: { name: string };
            roles?: string[];
        };
        permissions: string[];
    };
    [key: string]: unknown;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: dashboard().url },
];

export default function Dashboard() {
    const { props } = usePage<DashboardProps>();
    const { auth } = props;

    const permissions = auth.permissions || [];
    const hasPermission = (key: string) => permissions.includes(key);

    const activeCount = PERMISSION_CARDS.filter(p => hasPermission(p.key)).length;

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 py-6 px-12 bg-purple-50">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                        Welcome back, {auth.user.name}!👋
                    </h2>
                    <p className="text-gray-600">Here's what's happening with your company today.</p>
                </div>
                {/* Stats Grid */}
                <StatsGrid stats={stats} />

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <ActiveWorkspaces workspaces={workspaces} />
                    <div className="bg-white rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100">
                        <QuickActions actions={quickActions} />
                        <br />
                        <hr />
                        <br />
                        <TeamMembers members={teamMembers} />
                    </div>
                </div>
                {/* Recent Tasks */}
                <RecentTasks tasks={recentTasks} />
            </div>
        </AppLayout>
    );
}