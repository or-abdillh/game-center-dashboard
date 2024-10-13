<script setup lang="ts"></script>

<template>
    <header class="grid grid-cols-2 px-6 pt-4">
        <!-- start -->
        <section class="col-span-1">
            <p class=" text-primary-300 text-xl xl:text-2xl">Good evening, <strong
                    class="uppercase text-white">nikitin</strong></p>
        </section>

        <!-- end -->
        <section class="col-span-1 flex justify-between gap-5 items-center">
            <!-- search bar -->
            <div
                class="w-8/12 bg-quaternary flex gap-3 items-center ps-5 rounded-full overflow-hidden text-primary-300">
                <i class="fa-solid fa-search"></i>
                <input type="search"
                    class="px-5 py-4 w-full bg-quaternary placeholder:text-primary-300 outline-none placeholder:font-sans"
                    placeholder="Search">
            </div>

            <!-- others -->
            <div class="flex gap-3 items-center">
                <!-- cart -->
                <span class="grid place-items-center w-16 h-16 bg-secondary-500 rounded-full">
                    <i class="fa-solid fa-cart-shopping text-gray-50 text-2xl"></i>
                </span>

                <!-- notification -->
                <span class="grid place-items-center w-16 h-16 bg-secondary-500 rounded-full relative">
                    <i class="fa-regular fa-bell text-gray-50 text-2xl"></i>

                    <!-- notification badge -->
                    <span class="block w-6 h-6 bg-primary-500 rounded-full  absolute right-0 -top-1"></span>
                </span>
            </div>
        </section>
    </header>
</template>

<style scoped></style>
