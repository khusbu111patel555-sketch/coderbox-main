// import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()], esbuild: {
//     jsx: 'automatic',   // 👈 ye line add karo
//   },
// })





import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()], 
  esbuild: {
    jsx: 'automatic', 
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Saari node_modules files ko alag chunks mein daalein
          if (id.includes('node_modules')) {
            // React ecosystem
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            // UI/Animation libraries
            if (id.includes('framer-motion') || id.includes('lucide-react')) {
              return 'vendor-ui';
            }
            // Maps wali library ko yahan se hata dein taaki woh vendor mein chali jaye
            // Baaki saari choti libraries ek hi vendor chunk mein rakhein
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})