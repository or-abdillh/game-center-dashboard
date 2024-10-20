<script setup lang="ts">

// refs
const friendsList = ref<string[]>(["7309678.jpg", "7309681.jpg", "7309687.jpg", "7309693.jpg", "9723582.jpg", "7309693.jpg"])
const grupList = ref<string[]>(["9723582.jpg", "7309681.jpg", "7309693.jpg"])

</script>

<template>
    <aside class="flex justify-center animate__fadeInRight animate__animated animate__delay-2s">
        <!-- container -->
        <section class="w-9/12 flex flex-col justify-between gap-6 xl:gap-4">
            <!-- top -->
            <section class="flex flex-col items-center rounded-[2rem] bg-secondary-500 p-6">
                <!-- user avatar -->
                <section class="mb-8 xl:mb-12 animate__fadeInUp animate__animated animate__delay-3s">
                    <img src="/images/avatars/7309678.jpg" alt="Freepik" class="rounded-full">
                </section>

                <!-- friends -->
                <section class="flex flex-col items-center">
                    <!-- icon -->
                    <i
                        class="fa-solid fa-users text-gray-50 text-2xl animate__fadeInUp animate__animated animate__delay-3s"></i>
                    <!-- list -->
                    <div class="flex flex-col gap-6 xl:gap-10 mt-8">
                        <template v-for="(friend, index) in friendsList" :key="friend">
                            <UserBadge :avatar="friend" :is-in-game="index === 0" :is-online="true"
                                class="animate__fadeInUp animate__animated animate__delay-3s" />
                        </template>
                    </div>
                </section>
            </section>

            <!-- bottom -->
            <section class="flex flex-col items-center justify-evenly rounded-[2rem] bg-secondary-500 p-6 grow">
                <!-- icon -->
                <i
                    class="fa-solid fa-comments text-gray-50 text-2xl animate__fadeInUp animate__animated animate__delay-3s"></i>

                <!-- list -->
                <div class="flex flex-col gap-6 xl:gap-10 mt-8">
                    <template v-for="(grup, index) in grupList" :key="grup">
                        <GrupBadge :has-unread-chat="index !== 1" :poster="grup"
                            class="animate__fadeInUp animate__animated animate__delay-3s" />
                    </template>
                </div>
            </section>
        </section>
    </aside>
</template>