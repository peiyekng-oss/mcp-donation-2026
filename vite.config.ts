import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'googleapis',
        'google-auth-library',
        '@google-cloud/local-auth',
      ],
    },
  },
})
