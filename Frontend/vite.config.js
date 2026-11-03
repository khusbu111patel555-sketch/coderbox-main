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
          // Agar file node_modules se hai, toh use alag chunk mein daalein
          if (id.includes('node_modules')) {
            // React aur Router ki libraries
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            // UI/Animation libraries
            if (id.includes('framer-motion') || id.includes('lucide-react')) {
              return 'vendor-ui';
            }
            // Maps ki libraries
            if (id.includes('leaflet') || id.includes('react-leaflet')) {
              return 'vendor-maps';
            }
            // Baaki saari choti libraries
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})