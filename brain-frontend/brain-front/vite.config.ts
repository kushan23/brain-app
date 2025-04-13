import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  preview: {
    allowedHosts: ['brain.kushan23.com', 'localhost', '2401:4900:1c17:b411:89c9:c504:9ea6:3eb3%']
  },
  base: "/",
  plugins: [react()],
  
})
