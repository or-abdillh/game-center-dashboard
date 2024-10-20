<script setup lang="ts">

import type { Game } from '~/types';

interface Props {
    game: Game,
    isFeatured?: boolean
}

// props
const props = defineProps<Props>()

// refs
const showBorderEffect = ref<boolean>(false)

onMounted(() => {

    // show border effect after 3 seconds
    setTimeout(() => {
        showBorderEffect.value = true
    }, 3000)
})

</script>

<template>
    <!-- parent -->
    <section
        class="min-w-96 min-h-80 relative rounded-6xl hover:rotate-[-9deg] hover:-translate-x-2 duration-200 group">
        <!-- backdrop -->
        <div v-if="showBorderEffect"
            class="absolute top-0 bottom-0 right-0 left-1/4 border-4 border-dashed border-primary-300 border-opacity-40 group-hover:translate-x-6 group-hover:translate-y-4 group-hover:rotate-[9deg] z-10 duration-200 rounded-6xl">
        </div>

        <!-- layer -->
        <div :style="{ backgroundImage: `url('${props.game.poster}')` }"
            class="absolute inset-0 bg-cover bg-no-repeat bg-center overflow-hidden rounded-6xl z-20 animate__fadeInUp animate__animated animate__delay-2s">
            <!-- inner layer -->
            <div class="absolute inset-0 bg-slate-950 bg-opacity-70 p-8 flex flex-col gap-10"
                :class="props.isFeatured ? 'justify-between' : 'justify-end'">
                <!-- featured feature -->
                <div v-if="props.isFeatured"
                    class="flex justify-between items-center gap-3 animate__fadeInDown animate__animated animate__delay-2s">
                    <!-- play icon -->
                    <span class="grid place-items-center w-10 h-10 rounded-full bg-primary-500">
                        <i class="fa-solid fa-play text-slate-50 text-lg"></i>
                    </span>

                    <!-- bag icon -->
                    <span class="grid place-items-center w-10 h-10 rounded-full bg-slate-50">
                        <i class="fa-solid fa-bag-shopping text-primary-500 text-lg"></i>
                    </span>
                </div>

                <!-- copywriting -->
                <div>
                    <p
                        class="mb-3 text-2xl xl:text-3xl font-medium text-slate-50 animate__fadeInUp animate__animated animate__delay-2s">
                        {{ props.game.title }}</p>
                    <p class="text-lg text-slate-100 animate__fadeInUp animate__animated animate__delay-2s">{{
                        props.game.subtitle }}</p>
                </div>
            </div>
        </div>
    </section>
</template>