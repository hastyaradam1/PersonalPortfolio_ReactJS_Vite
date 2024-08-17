import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/PersonalPortfolio_ReactJS_Vite/",
  plugins: [react()],
})
