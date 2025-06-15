import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import htmlMinify from 'vite-plugin-html-minify'

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
                termsAndConditions: "src/terms-and-conditions.html",
                privacyPolicy: "src/privacy-policy.html",
            },
        },
        outDir: "../dist",
        emptyOutDir: true,
        minify: 'terser',
        terserOptions: {
            format: {
                comments: false,
            },
            compress: {
                drop_console: true,
            },
        },
    },
    root: "src",
    plugins: [
        tailwindcss(),
        htmlMinify({
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeEmptyAttributes: true,
            minifyJS: true,
            minifyCSS: true,
        }),
    ],
})
