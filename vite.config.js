import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built site works at any path:
// https://skachcorp.ca/ , https://user.github.io/skachcorp/ , Netlify, S3, etc.
export default defineConfig({
  base: './',
  plugins: [react()],
})
