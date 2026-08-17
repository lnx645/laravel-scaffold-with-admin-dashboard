import { createInertiaApp } from '@inertiajs/svelte';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AdminLayout from './layouts/admin/AdminLayout.svelte';
import { initializeFlashToast } from './lib/flash-toast.svelte';
import ErrorPage from './pages/ErrorPage.svelte';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
layout(name) {
        if (name.startsWith('ErrorPage')) {
            return ErrorPage;
        }

        return AdminLayout;
    },
    progress: {
        color: '#d47150',
    },
});

initializeFlashToast();