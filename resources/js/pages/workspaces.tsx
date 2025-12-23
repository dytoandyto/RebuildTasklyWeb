import {
    Users,
    FolderKanban,
    CheckCircle,
    TrendingUp,
    Calendar,
    Plus,
    Clock,
    MoreVertical,
    Badge,
    Star,
    Search,
    Filter,
    Grid3x3,
    List,
} from "lucide-react";
import AppLayout from '@/layouts/app-layout';

import { dashboard, workspaces } from '@/routes';
import { PERMISSION_CARDS } from '@/data/permission-data';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Page, revealProgress } from '@inertiajs/core';
import { Button, Input } from "@headlessui/react";
import { act, useState } from "react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { WorkspaceHeader } from "@/components/workspace/WorkspaceHeader";
import { WorkspaceControls } from "@/components/workspace/WorkspaceControls";
import { WorkspaceCard } from "@/components/workspace/WorkspaceCard";

const workspacess = [
    {
        id: 1,
        name: "Product Development",
        description: "Building the next generation of our platform with cutting-edge technology",
        color: "bg-purple-500",
        gradient: "from-purple-400 to-purple-500",
        tasks: {
            total: 45,
            completed: 32,
            inProgress: 8,
            pending: 5
        },
        members: [
            {
                name: "Michael Chen",
                avatar: "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjM5MjIyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
                name: "Emma Rodriguez",
                avatar: "https://images.unsplash.com/photo-1610896011476-300d6239d995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjM5NTc4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
                name: "James Wilson",
                avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mzg5MjIyNHww&ixlib=rb-4.1.0&q=80&w=1080"
            }
        ],
        totalMembers: 12,
        progress: 71,
        lastActivity: "2 hours ago",
        status: "active",
        isFavorite: true
    },
    {
        id: 2,
        name: "Marketing Campaign",
        description: "Q4 marketing initiatives and brand awareness campaigns",
        color: "bg-blue-500",
        gradient: "from-blue-400 to-blue-500",
        tasks: {
            total: 28,
            completed: 24,
            inProgress: 3,
            pending: 1
        },
        members: [
            {
                name: "Sarah Mitchell",
                avatar: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mzg1MzA3MXww&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
                name: "Michael Chen",
                avatar: "https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjM5MjIyMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
            }
        ],
        totalMembers: 8,
        progress: 86,
        lastActivity: "1 hour ago",
        status: "active",
        isFavorite: false
    },
    {
        id: 3,
        name: "Customer Support",
        description: "Handling customer inquiries and improving satisfaction scores",
        color: "bg-green-500",
        gradient: "from-green-400 to-green-500",
        tasks: {
            total: 34,
            completed: 18,
            inProgress: 12,
            pending: 4
        },
        members: [
            {
                name: "Emma Rodriguez",
                avatar: "https://images.unsplash.com/photo-1610896011476-300d6239d995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc3dvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NjM5NTc4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
                name: "James Wilson",
                avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mzg5MjIyNHww&ixlib=rb-4.1.0&q=80&w=1080"
            },
            {
                name: "Sarah Mitchell",
                avatar: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mzg1MzA3MXww&ixlib=rb-4.1.0&q=80&w=1080"
            }
        ],
        totalMembers: 15,
        progress: 53,
        lastActivity: "30 minutes ago",
        status: "active",
        isFavorite: true
    },
    {
        id: 4,
        name: "Design System",
        description: "Designing and implementing a new design system",
        color: "bg-pink-500",
        gradient: "from-pink-400 to-pink-500",
        tasks: {
            total: 22,
            completed: 12,
            inProgress: 6,
            pending: 4
        },
        members: [
            {
                name: "James Wilson",
                avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mzg5MjIyNHww&ixlib=rb-4.1.0&q=80&w=1080"
            }
        ],
        totalMembers: 8,
        progress: 86,
        lastActivity: "Yesterday",
        status: "archived",
        isFavorite: false
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

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Workspaces', href: workspaces().url },
];

export default function Workspaces() {
    const { props } = usePage<WorkspacesProps>();
    const { auth } = props;

    const permissions = auth.permissions || [];
    const hasPermission = (key: string) => permissions.includes(key);

    const activeCount = PERMISSION_CARDS.filter(p => hasPermission(p.key)).length;

    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <AppLayout>
            <Head title="Workspaces" />
            <div className="flex h-full flex-1 flex-col gap-6 py-6 px-12 bg-purple-50">
                {/* Header */}
                <div className="mb-8">
                    {/* Stats Bar */}
                    <WorkspaceHeader totalWorkspaces={activeCount} activeProjects={workspaces.length} totalMembers={PERMISSION_CARDS.length} avgProgress={50} />

                    {/* Filters & Search Bar */}
                    <WorkspaceControls viewMode={viewMode} setViewMode={setViewMode} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />


                    {/* Workspaces Grid/List */}
                    <div className={viewMode === 'grid'
                        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                        : 'flex flex-col gap-4' // Gunakan flex-col untuk list agar rapi ke bawah
                    }>
                        {workspacess
                            .filter(ws => ws.name.toLowerCase().includes(searchQuery.toLowerCase()))
                            .map((workspace) => (
                                <WorkspaceCard key={workspace.id} workspace={workspace} viewMode={viewMode} />
                            ))}
                    </div>

                    {/* Empty State (if no results) */}
                    {workspaces.length === 0 && (
                        <div className="bg-white rounded-2xl p-12 text-center shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FolderKanban className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-gray-900 mb-2">No workspaces found</h3>
                            <p className="text-gray-600 mb-6">
                                Get started by creating your first workspace
                            </p>
                            <Button className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-500 hover:shadow-lg text-white rounded-xl transition-all">
                                <Plus className="w-4 h-4 mr-2" /> Create Project
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}