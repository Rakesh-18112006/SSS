import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mpaFallback from 'vite-plugin-mpa-fallback'; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),
    mpaFallback(),
    react()],
   base: '/',
})
