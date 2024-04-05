// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  experimental: {
    typedPages: true
  },
  imports: {
    dirs: ['stores', "composables/**"]
  },
  vite: {
    server: {
      strictPort: true,
      hmr: {
        protocol: "ws"
      }
    }
  },
  components: {
    path: "~/components",
    pathPrefix: false
  },
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "shadcn-nuxt"
  ],
  build: {
    transpile: ["vue-toastification"]
  },
  shadcn: {
    prefix: '',
    componentsDir: "./components/ui"
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css']
})
