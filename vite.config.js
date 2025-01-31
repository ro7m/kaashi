import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/kaashi/',
  resolve: {
    alias: {
      'react/jsx-runtime': 'react/jsx-runtime.js'
    }
  }
})
