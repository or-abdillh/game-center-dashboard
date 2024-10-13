<script setup lang="ts">

import type { Game } from '~/types';

// refs
const featuredGames = ref<Game[]>([
    { poster: "/images/coin-master.jpeg", title: "Coin Master", subtitle: "Standard Edition + Starter Pass" },
    { poster: "/images/subway-surf.jpg", title: "Subway Surf", subtitle: "" },
    { poster: "/images/read-dead-redemption.jpeg", title: "Red Dead Redemption 3", subtitle: "Premium Pack" },
])

</script>

<template>
    <main class="p-6">
        <!-- hero -->
        <section class="grid grid-cols-7">
            <!-- banner -->
            <section class="col-span-5">
                <!-- wrapper -->
                <section class="p-12 banner--gradient rounded-3xl relative">
                    <!-- header -->
                    <div class="flex gap-3 mb-5">
                        <!-- popular badge -->
                        <span
                            class="inline-flex font-medium items-center gap-3 text-secondary-500 bg-oasis px-5 py-2 rounded-full">
                            <i class="fa-solid fa-fire-flame-curved"></i>
                            Popular
                        </span>

                        <!-- steam -->
                        <span class="grid place-items-center w-10 h-10 rounded-full bg-secondary-500">
                            <i class="fa-brands fa-steam text-gray-50 text-xl"></i>
                        </span>

                        <!-- epic -->
                        <span class="grid place-items-center w-10 h-10 rounded-full bg-secondary-500">
                            <img src="/images/epic-games.png" alt="Epic Games" class="w-4">
                        </span>
                    </div>

                    <!-- copywriting -->
                    <div class="w-4/12">
                        <p class="text-2xl xl:text-3xl text-gray-50 font-semibold mb-4">Valorant</p>
                        <p class="text-lg text-gray-50 mb-8">
                            Valorant is multiplayer computer game developed and published by Riot Games. Valorant is
                            Riot
                            Games first first-person shooter game.
                        </p>

                        <!-- reviews -->
                        <div class="flex">
                            <!-- users -->
                            <div class="flex">
                                <img src="/images/avatars/7309681.jpg" class="w-10 h-10 rounded-full">
                                <img src="/images/avatars/7309693.jpg" class="w-10 h-10 -translate-x-4 rounded-full">
                                <img src="/images/avatars/9723582.jpg" class="w-10 h-10 rounded-full -translate-x-8">
                            </div>

                            <!-- reviews -->
                            <span
                                class="inline-flex -translate-x-4 font-semibold items-center gap-2 text-secondary-500 bg-gray-50 px-5 py-2 rounded-full">
                                <i class="fa-solid fa-thumbs-up text-xl"></i>
                                +53 reviews
                            </span>
                        </div>
                    </div>

                    <!-- image -->
                    <img src="/images/valorant-character.png" alt="Valorant Character"
                        class="absolute bottom-0 right-16 w-7/12">
                </section>
            </section>

            <!-- list games -->
            <section class="col-span-2">
                <!-- wrapper -->
                <section class="flex flex-col gap-6">
                    <template v-for="game in featuredGames" :key="game.poster">
                        <ListsFeaturedGameList :game />
                    </template>
                </section>
            </section>
        </section>
    </main>
</template>

<style scoped>
.banner--gradient {
    background: linear-gradient(90deg, #BB3B3B 60%, #62272D 40%);
}
</style>
