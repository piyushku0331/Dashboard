import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    open: true, // auto-opens browser
    port: 5173,
  },
  build: {
    outDir: 'dist',
  },
  // 👇 This is the key fix
  base: '/',
});
