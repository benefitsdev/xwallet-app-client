import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    'process.env.VITE_APP_NAME': '"ZKX Wallet"',
    'process.env.VITE_APP_DESCRIPTION': '"Secure Digital Asset Wallet"',
    'process.env.VITE_OG_IMAGE': '"/logo.png"',
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
})
