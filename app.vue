<script setup lang="ts">

useHead({
    script: [
        {
            src: 'https://kit.fontawesome.com/b026c11a83.js',
            crossorigin: 'anonymous',
        }
    ]
})

</script>

<template>
    <NuxtLayout name="base">
        <!-- header -->
        <SectionsHeader class="mb-8" />

        <!-- main -->
        <SectionsMainContent />
    </NuxtLayout>
</template>
