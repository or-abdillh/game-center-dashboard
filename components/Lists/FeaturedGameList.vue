<script setup lang="ts">

import type { Game } from '~/types';

interface Props {
    game: Game
}

// props
const { game } = defineProps<Props>()

</script>

<template>
    <section
        class="flex items-center justify-between gap-3 bg-secondary-500 w-full ps-2 pe-6 py-2 rounded-4xl animate__fadeInUp animate__animated">
        <!-- left -->
        <div class="flex items-center gap-5">
            <img :src="game.poster" :alt="game.title"
                class="w-3/12 rounded-3xl animate__zoomInLeft animate__animated animate__delay-1s">

            <!-- copywriting -->
            <div>
                <p class="text-gray-50 font-semibold text-lg animate__fadeInUp animate__animated animate__delay-1s">{{
                    game.title }}</p>
                <p v-if="game.subtitle"
                    class="text-secondary-100 animate__fadeInUp animate__animated animate__delay-1s">{{ game.subtitle }}
                </p>
            </div>
        </div>

        <!-- right -->
        <i
            class="fa-solid fa-chevron-right text-gray-50 text-xl animate__fadeInRight animate__animated animate__delay-1s"></i>
    </section>
</template>

<style scoped></style>
