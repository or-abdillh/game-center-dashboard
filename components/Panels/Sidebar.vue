<script setup lang="ts">

import type { Menu } from '~/types';

// refs
const menus = ref<Menu[]>([
    { name: "Home", icon: "fa-home" },
    { name: "Gamepad", icon: "fa-gamepad" },
    { name: "Gift", icon: "fa-gift" },
    { name: "Live", icon: "fa-tv" },
    { name: "Leaderboard", icon: "fa-chart-pie" },
    { name: "Cart", icon: "fa-bag-shopping" },
    { name: "Inbox", icon: "fa-message" },
])

const activeMenu = ref<Menu>(menus.value[0])

</script>

<template>
    <aside class="flex justify-center">

        <section
            class="w-9/12 mx-auto rounded-[2rem] bg-secondary-500 p-6 flex flex-col justify-between animate__fadeInLeft animate__animated animate__delay-2s">
            <!-- top -->
            <section class="pt-6">
                <!-- logo -->
                <img src="/images/logo.png" alt="logo"
                    class="w-10/12 mx-auto animate__fadeInUp animate__animated animate__delay-3s">

                <!-- menus -->
                <section class="mt-16 flex flex-col gap-6">
                    <template v-for="menu in menus" :key="menu.name">
                        <!-- menu -->
                        <button @click="activeMenu = menu"
                            class="text-xl p-3 w-full rounded-xl animate__fadeInUp animate__animated animate__delay-3s"
                            :class="activeMenu.name === menu.name ? ' text-primary-500 bg-primary-500 bg-opacity-10 backdrop-blur' : 'text-gray-50 hover:text-primary-500 hover:bg-primary-500 hover:bg-opacity-10 hover:backdrop-blur duration-200'">
                            <i :class="menu.icon" class="fa-solid"></i>
                        </button>
                    </template>
                </section>
            </section>

            <!-- bottom -->
            <section class="grid place-items-center">
                <!-- action -->
                <button
                    class="border border-secondary-100 border-dashed p-3 rounded-xl animate__fadeInUp animate__animated animate__delay-3s">
                    <!-- wrapper -->
                    <span class="grid place-items-center p-2 bg-primary-500 rounded-full">
                        <i class="fa-solid fa-plus text-gray-50"></i>
                    </span>
                </button>
            </section>
        </section>
    </aside>
</template>
