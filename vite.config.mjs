import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "/index.html",
  },
  build: {
    rollupOptions: {
      input: {
        main: "src/index.html",
        features: "src/features.html",
        company: "src/company.html",
        contact: "src/contact.html",
        terms: "src/terms.html",
        blog: "src/blog.html",
        article: "src/article.html",
      },
    },
    outDir: "../dist",
    emptyOutDir: true,
  },
  root: "src",
});
