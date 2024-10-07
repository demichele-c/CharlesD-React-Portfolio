import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure the build output directory is 'dist'
  },
  server: {
    open: true,  // Automatically open the app in the browser on start
  },
  base: '/', // Set the base URL
})
