<script setup lang="ts">

// refs
const friendsList = ref<string[]>(["7309678.jpg", "7309681.jpg", "7309687.jpg", "7309693.jpg", "9723582.jpg"])
const grupList = ref<string[]>(["9723582.jpg", "7309681.jpg", "7309693.jpg"])

</script>

<template>
    <aside class="w-1/12 h-[95vh] flex justify-center">

        <!-- container -->
        <section class="w-9/12 flex flex-col justify-between">
            <!-- top -->
            <section class="flex flex-col items-center rounded-[2rem] bg-secondary-500 p-6">
                <!-- user avatar -->
                <section class="mb-12">
                    <img src="/images/avatars/7309678.jpg" alt="Freepik" class="rounded-full">
                </section>

                <!-- friends -->
                <section class="flex flex-col items-center">
                    <!-- icon -->
                    <i class="fa-solid fa-users text-gray-50 text-xl"></i>
                    <!-- list -->
                    <div class="flex flex-col gap-10 mt-8">
                        <template v-for="(friend, index) in friendsList" :key="friend">
                            <UserBadge :avatar="friend" :is-in-game="index === 0" :is-online="true" />
                        </template>
                    </div>
                </section>
            </section>

            <!-- bottom -->
            <section class="flex flex-col items-center rounded-[2rem] bg-secondary-500 p-6">
                <!-- icon -->
                <i class="fa-solid fa-comments text-gray-50 text-xl"></i>

                <!-- list -->
                <div class="flex flex-col gap-10 mt-8">
                    <template v-for="(grup, index) in grupList" :key="grup">
                        <GrupBadge :has-unread-chat="index !== 1" :poster="grup" />
                    </template>
                </div>
            </section>
        </section>
    </aside>
</template>