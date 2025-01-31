import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/kaashi/', // Your repo name
  build: {
    rollupOptions: {
      external: ['react/jsx-runtime']
    }
  }
})
