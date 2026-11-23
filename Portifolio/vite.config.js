import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // No Windows o Vite às vezes não percebe que um arquivo mudou
    // e o navegador fica com a versão antiga. Isso força ele a conferir.
    watch: { usePolling: true, interval: 300 },
  },
})
