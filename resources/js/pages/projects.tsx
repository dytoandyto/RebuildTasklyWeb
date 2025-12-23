import { ImageWithFallback } from "@/components/ImageWithFallback";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectControls } from "@/components/projects/ProjectControls";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import { WorkspaceControls } from "@/components/workspace/WorkspaceControls";
import AppLayout from "@/layouts/app-layout";
import { Button, Input } from "@headlessui/react";
import { Head, usePage } from "@inertiajs/react";
import { AlertCircle, Badge, Calendar, CheckCircle, Clock, Filter, FolderKanban, Grid3x3, List, MoreVertical, Plus, Search, Users } from "lucide-react";
import { Page } from "node_modules/@inertiajs/core/types/types";
import { useState } from "react";


const stats = [
    {
        title: "Total Projects",
        value: "24",
        change: "+3 this month",
        icon: FolderKanban,
        color: "from-purple-400 to-purple-500"
    },
    {
        title: "In Progress",
        value: "12",
        change: "Active now",
        icon: Clock,
        color: "from-blue-400 to-blue-500"
    },
    {
        title: "Completed",
        value: "8",
        change: "+2 this week",
        icon: CheckCircle,
        color: "from-green-400 to-green-500"
    },
    {
        title: "Overdue",
        value: "4",
        change: "Need attention",
        icon: AlertCircle,
        color: "from-red-400 to-red-500"
    }
];

const projects = [
    {
        id: 1,
        name: "Website Redesign",
        description: "Complete redesign of company website with modern UI/UX",
        status: "in-progress",
        progress: 67,
        deadline: "Dec 15, 2025",
        manager: {
            name: "Michael Chen",
            avatar: "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjM5MjIyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        tasks: {
            total: 45,
            completed: 30
        },
        members: 8,
        priority: "high",
        color: "bg-purple-500"
    },
    {
        id: 2,
        name: "Mobile App Development",
        description: "Build native mobile applications for iOS and Android",
        status: "in-progress",
        progress: 45,
        deadline: "Jan 20, 2026",
        manager: {
            name: "Emma Rodriguez",
            avatar: "https://images.unsplash.com/photo-1610896011476-300d6239d995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjM5NTc4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        tasks: {
            total: 67,
            completed: 30
        },
        members: 12,
        priority: "high",
        color: "bg-blue-500"
    },
    {
        id: 3,
        name: "Marketing Campaign Q4",
        description: "Year-end marketing campaign for product launch",
        status: "completed",
        progress: 100,
        deadline: "Nov 30, 2025",
        manager: {
            name: "James Wilson",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mzg5MjIyNHww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        tasks: {
            total: 28,
            completed: 28
        },
        members: 6,
        priority: "medium",
        color: "bg-green-500"
    },
    {
        id: 4,
        name: "Database Migration",
        description: "Migrate to new cloud infrastructure and optimize performance",
        status: "planning",
        progress: 15,
        deadline: "Dec 31, 2025",
        manager: {
            name: "Sarah Mitchell",
            avatar: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mzg1MzA3MXww&ixlib=rb-4.1.0&q=80&w=1080"
        },
        tasks: {
            total: 34,
            completed: 5
        },
        members: 5,
        priority: "medium",
        color: "bg-orange-500"
    },
    {
        id: 5,
        name: "Customer Portal",
        description: "Self-service portal for customer support and documentation",
        status: "in-progress",
        progress: 82,
        deadline: "Dec 5, 2025",
        manager: {
            name: "Michael Chen",
            avatar: "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjM5MjIyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        tasks: {
            total: 52,
            completed: 43
        },
        members: 9,
        priority: "high",
        color: "bg-pink-500"
    },
    {
        id: 6,
        name: "Security Audit",
        description: "Comprehensive security review and penetration testing",
        status: "overdue",
        progress: 55,
        deadline: "Nov 25, 2025",
        manager: {
            name: "Emma Rodriguez",
            avatar: "https://images.unsplash.com/photo-1610896011476-300d6239d995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjM5NTc4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
        },
        tasks: {
            total: 23,
            completed: 13
        },
        members: 4,
        priority: "high",
        color: "bg-red-500"
    }
];

interface WorkspacesProps extends Page {
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

export default function Projects() {
    const { props } = usePage<WorkspacesProps>();
    const { auth } = props;

    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <AppLayout>
            <Head title="Projects" />
            <div className="p-8 bg-gray-50 min-h-screen">
                {/* Header */}
                <ProjectHeader totalProjects={projects.length} totalInProgress={projects.filter(p => p.status === 'in-progress').length} totalCompleted={projects.filter(p => p.status === 'completed').length} totalOverdue={projects.filter(p => p.status === 'overdue').length} />

                {/* Controls */}
                <ProjectControls
                    viewMode={viewMode}
                    setViewMode={setViewMode}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                {/* Projects Grid/List */}
                <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
                    {projects
                        .filter(project => project.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map(project => (
                            <ProjectCard key={project.id} project={project} viewMode={viewMode} />
                        ))}
                </div>
            </div>
        </AppLayout>
    );
}