import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
   server: {
    proxy: {
      '/user': 'http://localhost:4000',
      '/blog': 'http://localhost:4000',
      '/images': 'http://localhost:4000'
    }
  }
})

