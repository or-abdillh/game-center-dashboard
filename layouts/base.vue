<script setup lang="ts"></script>

<template>

    <Head>
        <Title>Game Center Dashboard | Nuxt Tailwind</Title>
    </Head>
    <main class="min-h-screen bg-tertiary grid grid-cols-12 xl:py-8 px-2 py-6">
        <!-- sidebar -->
        <PanelsSidebar class="col-span-1" />

        <!-- main panel -->
        <section class="col-span-10">
            <slot />
        </section>

        <!-- account panel -->
        <PanelsAccounts class="col-span-1" />
    </main>
</template>
