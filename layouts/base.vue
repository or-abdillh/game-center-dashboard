<script setup lang="ts"></script>

<template>

    <Head>
        <Title>Game Center Dashboard | Nuxt Tailwind</Title>
    </Head>
    <main class="min-h-screen bg-tertiary flex xl:py-8 px-2 py-6">
        <!-- sidebar -->
        <PanelsSidebar />

        <!-- main panel -->
        <section class="w-full">
            <slot />
        </section>

        <!-- account panel -->
        <PanelsAccounts />
    </main>
</template>
