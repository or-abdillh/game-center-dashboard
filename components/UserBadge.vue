x
<script setup lang="ts">

interface Props {
    isOnline: boolean,
    isInGame: boolean,
    avatar: string,
}

// props
const { isInGame = false, isOnline = true, avatar = "" } = defineProps<Props>()

</script>

<template>
    <div class="w-10 h-10 bg-cover bg-center bg-no-repeat rounded-full relative" :style="{
        backgroundImage: `url(/images/avatars/${avatar})`
    }">
        <!-- is online -->
        <span v-if="isOnline"
            class="block w-3 h-3 bg-green-400 rounded-full border border-secondary-500 absolute right-0 -top-1"></span>

        <!-- in game -->
        <span v-if="isInGame"
            class="absolute truncate inline-block p-1 bg-primary-600 text-xs text-gray-50 rounded -bottom-3 text-center left-2/4 -translate-x-2/4">In
            Game</span>
    </div>
</template>

<style scoped></style>
