<script setup lang="ts">

import type { Game } from '~/types';
import Wave from "@/assets/vectors/wave.svg"

// refs
const featuredGames = ref<Game[]>([
    { poster: "/images/coin-master.jpeg", title: "Coin Master", subtitle: "Standard Edition + Starter Pass" },
    { poster: "/images/subway-surf.jpg", title: "Subway Surf", subtitle: "" },
    { poster: "/images/read-dead-redemption.jpeg", title: "Red Dead Redemption 3", subtitle: "Premium Pack" },
])

const newGames = ref<Game[]>([
    { poster: "/images/uncharted-4.png", title: "Uncharted 4", subtitle: "Is the sequel to Uncharted 3: Drake's Deception and the final installment of Nathan Drake's adventures." },
    { poster: "/images/dishorned-standart-edition.png", title: "Dishorned: Standart Edition", subtitle: "" },
    { poster: "/images/elden-ring.png", title: "Elden Ring", subtitle: "" }
])

</script>

<template>
    <main class="p-6">
        <!-- hero -->
        <section class="grid grid-cols-7 mb-12">
            <!-- banner -->
            <section class="col-span-5">
                <!-- wrapper -->
                <section class="p-10 banner--gradient rounded-6xl relative animate__fadeInUp animate__animated">
                    <!-- header -->
                    <div class="flex gap-3 mb-5">
                        <!-- popular badge -->
                        <span
                            class="inline-flex font-medium items-center gap-3 text-secondary-500 bg-oasis px-5 py-2 rounded-full animate__fadeInUp animate__animated animate__delay-1s">
                            <i class="fa-solid fa-fire-flame-curved"></i>
                            Popular
                        </span>

                        <!-- steam -->
                        <span
                            class="grid place-items-center w-10 h-10 rounded-full bg-secondary-500 animate__fadeInUp animate__animated animate__delay-1s">
                            <i class="fa-brands fa-steam text-gray-50 text-xl"></i>
                        </span>

                        <!-- epic -->
                        <span
                            class="grid place-items-center w-10 h-10 rounded-full bg-secondary-500 animate__fadeInUp animate__animated animate__delay-1s">
                            <img src="/images/epic-games.png" alt="Epic Games" class="w-4">
                        </span>
                    </div>

                    <!-- copywriting -->
                    <div class="w-4/12">
                        <p
                            class="text-3xl xl:text-4xl text-gray-50 font-semibold mb-4 font-sans animate__fadeInUp animate__animated animate__delay-1s">
                            Valorant</p>
                        <p class="text-lg text-gray-50 mb-8 animate__fadeInUp animate__animated animate__delay-1s">
                            Valorant is multiplayer computer game developed and published by Riot Games. Valorant is
                            Riot
                            Games first first-person shooter game.
                        </p>

                        <!-- reviews -->
                        <div class="flex">
                            <!-- users -->
                            <div class="flex animate__fadeInUp animate__animated animate__delay-1s">
                                <img src="/images/avatars/7309681.jpg" class="w-10 h-10 rounded-full">
                                <img src="/images/avatars/7309693.jpg" class="w-10 h-10 -translate-x-4 rounded-full">
                                <img src="/images/avatars/9723582.jpg" class="w-10 h-10 rounded-full -translate-x-8">
                            </div>

                            <!-- reviews -->
                            <span
                                class="inline-flex -translate-x-4 font-semibold items-center gap-2 text-secondary-500 bg-gray-50 px-5 py-2 rounded-full animate__fadeInUp animate__animated animate__delay-1s">
                                <i class="fa-solid fa-thumbs-up text-xl"></i>
                                +53 reviews
                            </span>
                        </div>
                    </div>

                    <!-- image -->
                    <img src="/images/valorant-character.png" alt="Valorant Character"
                        class="absolute bottom-0 right-16 w-7/12 animate__fadeInLeft animate__animated">
                </section>
            </section>

            <!-- list games -->
            <section class="col-span-2">
                <!-- wrapper -->
                <section class="flex flex-col gap-6 justify-between">
                    <template v-for="game in featuredGames" :key="game.poster">
                        <ListsFeaturedGameList :game />
                    </template>
                </section>
            </section>
        </section>

        <section class="grid grid-cols-7 gap-12">
            <section class="col-span-5">
                <!-- new games -->
                <section class="w-full mb-8">
                    <!-- header -->
                    <section class="flex justify-between items-center mb-4">
                        <p
                            class="text-2xl xl:text-3xl text-gray-50 font-medium animate__fadeInLeft animate__animated animate__delay-2s">
                            New Games</p>

                        <small
                            class="text-xl font-medium text-primary-300 animate__fadeInRight animate__animated animate__delay-2s">See
                            more</small>
                    </section>

                    <!-- list games -->
                    <section class="flex items-center gap-12 overflow-auto py-5 ps-6">
                        <template v-for="(game, index) in newGames" :key="game">
                            <CardNewGame :game :is-featured="index === 0" />
                        </template>
                    </section>
                </section>

                <!-- last downloads -->
                <section class="w-full">
                    <section class="flex justify-between items-center mb-4">
                        <p
                            class="text-2xl xl:text-3xl text-gray-50 font-medium animate__fadeInLeft animate__animated animate__delay-2s">
                            Last Downloads</p>

                        <small
                            class="text-xl font-medium text-primary-300 animate__fadeInRight animate__animated animate__delay-2s">See
                            more</small>
                    </section>

                    <!-- volume bar -->
                    <div class="w-full rounded-4xl p-6 relative flex justify-between overflow-hidden animate__fadeInDown animate__animated animate__delay-2s"
                        style="background-image: linear-gradient(90deg, #BB3B3B 50%, #3A0707 50%);">
                        <!-- left -->
                        <div class="flex items-center gap-6 animate__fadeInLeft animate__animated animate__delay-3s">
                            <!-- fifa  -->
                            <span class="w-24 h-24 p-4 grid place-items-center rounded-2xl bg-gray-50">
                                <img src="/images/fifa-23.png" alt="Fifa 23">
                            </span>

                            <!-- copywriting -->
                            <div>
                                <p class="text-2xl text-gray-50 font-medium mb-2">FIFA 23</p>
                                <!-- badge -->
                                <span
                                    class="inline-block px-3 py-2 rounded-xl text-gray-50 bg-secondary-700 text-sm font-medium">
                                    Sports simulator
                                </span>
                            </div>
                        </div>

                        <!-- wave -->
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                            class="-rotate-90 absolute scale-50">
                            <path fill="#3A0707" fill-opacity="1"
                                d="M0,160L34.3,160C68.6,160,137,160,206,138.7C274.3,117,343,75,411,69.3C480,64,549,96,617,106.7C685.7,117,754,107,823,90.7C891.4,75,960,53,1029,53.3C1097.1,53,1166,75,1234,101.3C1302.9,128,1371,160,1406,176L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                            </path>
                        </svg>

                        <!-- right -->
                        <div
                            class="flex justify-end items-center gap-10 animate__fadeInRight animate__animated animate__delay-3s">
                            <!-- copywriting -->
                            <div class="text-right">
                                <p class="text-xl text-gray-50 font-medium">1 hour 23 min.</p>
                                <small class="text-xl font-medium text-secondary-700">265Mb of 1,23Gb</small>
                            </div>

                            <!-- action -->
                            <div class="flex items-center gap-4">
                                <span class="grid place-items-center w-10 h-10 rounded-full bg-primary-500">
                                    <i class="fa-solid fa-play text-slate-50 text-lg"></i>
                                </span>

                                <span class="grid place-items-center w-10 h-10 rounded-full bg-gray-50">
                                    <i class="fa-solid fa-close text-primary-500 text-lg"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section class="col-span-2">
                <!-- your stats -->
                <section class="w-full">
                    <!-- header -->
                    <section class="flex justify-between items-center mb-8">
                        <p
                            class="text-2xl xl:text-3xl text-gray-50 font-medium animate__fadeInLeft animate__animated animate__delay-2s">
                            Your Statistic</p>

                        <i
                            class="fa-solid fa-long-arrow-right text-primary-300 animate__fadeInRight animate__animated animate__delay-2s"></i>
                    </section>

                    <!-- card -->
                    <section
                        class="bg-secondary-500 rounded-5xl px-8 py-12 flex flex-col gap-24 items-center relative animate__fadeInRight animate__animated animate__delay-2s">
                        <!-- spectrum -->
                        <div
                            class="w-72 h-72 grid place-items-center bg-secondary-500 rounded-full bg-[url('/images/spectrum.png')] bg-cover bg-center animate__fadeInUp animate__animated animate__delay-3s">
                            <!-- inner -->
                            <div class="w-52 h-52 rounded-full bg-secondary-500 grid place-items-center">
                                <!-- container -->
                                <div
                                    class="w-40 h-40 bg-secondary-500 border border-red-300 border-opacity-50 rounded-full p-3 grid place-items-center">
                                    <div class="flex flex-col gap-1 text-center">
                                        <p class="text-primary-300 text-sm">Total Hours</p>
                                        <p class="text-2xl xl:text-3xl font-medium text-gray-50">12,340H</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- stats -->
                        <div class="flex gap-6 justify-between animate__fadeInUp animate__animated animate__delay-3s">
                            <!-- dota -->
                            <div>
                                <!-- icon -->
                                <span class="grid place-items-center w-20 h-20 rounded-full bg-primary-500 mb-2">
                                    <i class="fa-solid fa-gamepad text-gray-50 text-xl"></i>
                                </span>

                                <p class="text-gray-50 font-medium text-center text-lg">2,340H</p>
                            </div>

                            <!-- valorant -->
                            <div>
                                <!-- icon -->
                                <span class="grid place-items-center w-20 h-20 rounded-full bg-amber-100 mb-2">
                                    <i class="fa-solid fa-gamepad text-gray-700 text-xl"></i>
                                </span>

                                <p class="text-gray-50 font-medium text-center text-lg">5,420H</p>
                            </div>

                            <!-- cs go -->
                            <div>
                                <!-- icon -->
                                <span class="grid place-items-center w-20 h-20 rounded-full bg-purple-500 mb-2">
                                    <i class="fa-solid fa-gamepad text-gray-50 text-xl"></i>
                                </span>

                                <p class="text-gray-50 font-medium text-center text-lg">4,580H</p>
                            </div>
                        </div>
                    </section>
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
