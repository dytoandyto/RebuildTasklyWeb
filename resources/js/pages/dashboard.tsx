import PermissionCard from '@/components/permission-card';
import AppLayout from '@/layouts/app-layout';

import { dashboard } from '@/routes';
import { PERMISSION_CARDS } from '@/data/permission-data';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { Page } from '@inertiajs/core';

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
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            
            <div className="flex h-full flex-1 flex-col gap-6 py-6 px-12">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                        Hi, {auth.user.name}
                    </h2>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                        <span>{auth.user.email}</span>
                        {auth.user.company && (
                            <>
                                <span>•</span>
                                <span>{auth.user.company.name}</span>
                            </>
                        )}
                    </div>
                </div>

                <div className="border-t border-border pt-6">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6 font-semibold">
                        Your Active Permissions ({activeCount})
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {PERMISSION_CARDS.map((cardData) => (
                            <PermissionCard 
                                key={cardData.key}
                                data={cardData}
                                granted={hasPermission(cardData.key)}
                            />
                        ))}

                        {activeCount === 0 && (
                            <div className="col-span-full p-12 text-center border border-dashed border-border rounded-lg bg-sidebar-accent/10">
                                <p className="text-muted-foreground italic">
                                    Anda tidak memiliki izin akses apapun saat ini.
                                </p>
                                <p className="text-xs text-muted-foreground mt-2">
                                    Pastikan Seeder sudah dijalankan dan User memiliki Role.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}