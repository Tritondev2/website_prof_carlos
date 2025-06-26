import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Adicione esta seção de configuração do servidor
  server: {
    proxy: {
      // Redireciona qualquer requisição que comece com /api para o nosso back-end
      '/api': {
        target: 'http://localhost:3001', // O endereço do seu servidor back-end
        changeOrigin: true, // Necessário para o proxy funcionar corretamente
      },
    },
  },
})