import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages hosts this project at /Portfolio/, not at the domain root.
  base: '/Portfolio/',
  plugins: [react()],
})
