import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Cambia si es necesario
  build: {
    outDir: 'dist', // Asegúrate de que sea 'dist'
  },
  resolve: {
    alias: {
      "@": "/src", // Alias opcional para organizar tu código
    },
  },
});
