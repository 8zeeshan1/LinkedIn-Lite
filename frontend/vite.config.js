import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Backend proxy setup so you can use relative `/api` URLs during local dev
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:8000'
    }
  }
})
