import { usePage } from '@inertiajs/react';
import { Page } from '@inertiajs/core';
import AppLogoIcon from './app-logo-icon';

interface SharedProps extends Page {
    auth: {
        user: {
            company?: {
                name: string;
            };
        } | null;
    };
    [key: string]: unknown;
}

export default function AppLogo() {
    const { props } = usePage<SharedProps>();
    const { auth } = props;

    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
                <AppLogoIcon className="size-5 fill-current text-white dark:text-black" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold">
                    {auth.user?.company?.name || 'Taskly Role Permissions'}
                </span>
            </div>
        </>
    );
}
