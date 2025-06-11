import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base: '/',
    server: {
        open: "/index.html",
    },
    build: {
        rollupOptions: {
            input: {
                main: "src/index.html",
                howIWorks: "src/how-it-works.html",
                ourMission: "src/our-mission.html",
                buyer: "src/buyer.html",
                contact: "src/contact.html",
            },
        },
        outDir: "../dist",
        emptyOutDir: true,
        // minify: true,
    },
    root: "src",
    plugins: [
        tailwindcss(),
    ],
})