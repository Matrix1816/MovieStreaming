import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  server:{
    allowedHosts:["5173-matrix1816-moviestreamin-7pq8l0hsp4.app.codeanywhere.com"]
  },
  plugins: [react(),tailwindcss(),],
})

