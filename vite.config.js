import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/RaymondWang/', // <--- ADD THIS LINE (use your actual repo name inside slashes)
})