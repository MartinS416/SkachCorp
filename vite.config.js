import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const page = (path) => fileURLToPath(new URL(path, import.meta.url))

// Relative base so the built site works at any path:
// https://skachcorp.ca/ , https://user.github.io/skachcorp/ , Netlify, S3, etc.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      // Two pages: the studio site, and the Disconnect product showcase
      // published at /disconnect/ (disconnect/index.html).
      input: {
        main: page('index.html'),
        disconnect: page('disconnect/index.html'),
      },
    },
  },
})
