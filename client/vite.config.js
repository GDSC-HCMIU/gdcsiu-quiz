import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src/'),
    },
  },
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
    }),
  ],
  server: {
    host: true,
    strictPort: true,
    port: 3000,
    open: true
  },
})
