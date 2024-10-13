<script setup lang="ts">

interface Props {
    poster: string,
    hasUnreadChat: boolean
}

// props
const { poster = "", hasUnreadChat = true } = defineProps<Props>()

</script>

<template>
    <div class="w-12 h-12 bg-cover bg-center bg-no-repeat rounded-full relative" :style="{
        backgroundImage: `url(/images/avatars/${poster})`
    }">
        <!-- has unread chat -->
        <span v-if="hasUnreadChat"
            class="block w-4 h-4 bg-primary-600 rounded-full border-2 border-secondary-500 absolute right-0 -top-1"></span>
    </div>
</template>

<style scoped></style>
