import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    //NOTE: Needed when deploying
    chunkSizeWarningLimit: 800,
  },
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser"
    },
  },
})
