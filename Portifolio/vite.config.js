import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],

  // No GitHub Pages o site fica em lucasdionisiocoutinho.github.io/Meu-Portifolio/
  // então os arquivos precisam desse caminho. No npm run dev continua "/".
  base: command === 'build' ? '/Meu-Portifolio/' : '/',

  server: {
    // No Windows o Vite às vezes não percebe que um arquivo mudou
    // e o navegador fica com a versão antiga. Isso força ele a conferir.
    watch: { usePolling: true, interval: 300 },
  },
}))
