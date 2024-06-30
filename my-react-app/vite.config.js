import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/React-simple-todo/', // リポジトリ名に置き換えてください
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
