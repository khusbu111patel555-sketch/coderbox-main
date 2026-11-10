import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    // 👇 Image Optimizer Plugin yahan add kiya hai
    ViteImageOptimizer({
      jpg: { quality: 80 },
      jpeg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80 },
    }),
  ], 
  esbuild: {
    jsx: 'automatic', 
  },
  build: {
    chunkSizeWarningLimit: 500,
  },
})