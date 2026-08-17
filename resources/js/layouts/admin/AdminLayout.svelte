<script lang="ts">
    import type { Snippet } from 'svelte';
    import AppShellLayout from '@/layouts/AppShellLayout.svelte';
import type {AppShellNavItem, AppShellNavSection, AppShellUser} from '@/layouts/AppShellLayout.svelte';
    import BrandIcon from './BrandIcon.svelte';

    let {
        children,
    }: {
        children: Snippet;
    } = $props();

    const user: AppShellUser = {
        name: 'Administrator',
        email: 'admin@example.com',
        id: '1',
        role: 'Administrator',
        homeHref: '/',
    };

    const navItems: Array<AppShellNavItem | AppShellNavSection> = [
        {
            href: '/',
            label: 'Dashboard',
            icon: 'bi-speedometer2',
        },
        {
            section: 'Menu',
            items: [
                {
                    href: '#',
                    label: 'Halaman Baru',
                    icon: 'bi-file-earmark-plus',
                },
            ],
        },
    ];
</script>

{#snippet brandIconNode()}
    <BrandIcon />
{/snippet}

<AppShellLayout
    brandTitle="ADMIN"
    brandSubtitle="Panel Manajemen"
    {brandIconNode}
    title="Dashboard"
    description="Panel administrasi"
    {navItems}
    {user}
>
    {@render children?.()}
</AppShellLayout>