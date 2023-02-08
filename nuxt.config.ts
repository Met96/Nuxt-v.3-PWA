// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@kevinmarrec/nuxt-pwa'],
    pwa: {
        meta: {
            title: "Test PWA",
            author: "Me"
        },
        manifest: {
            name: "Test PWA",
            short_name: "Test PWA",
            description: "this is a tes",
            lang: "it"
        },
        head: {
            title: "Test PWA"
        },
        icon: {
			fileName: 'favicon.png',
            sizes: [64,120, 144, 152,192,384,512],
			splash: {
				backgroundColor: "#ffffff",
				targetDir: '/',
				devices: [],
			},
		},
		workbox: {
			enabled: true,
		},
    }
})
