// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nuxt-mdi', 'nuxt-svgo'],
    googleFonts: {
        families: {
            Poppins: {
                wght: [400, 500, 600, 700],
                italic: [400, 500, 600, 700],
            }
        },
        preconnect: true,
        preload: true,
        stylePath: "css",
        outputDir: "assets",
        fontsDir: "fonts",
    }
})