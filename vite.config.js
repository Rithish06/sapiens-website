import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173, // Match this with your ngrok port
    host: '0.0.0.0', // Allow ngrok to connect
    allowedHosts: ['8f3d93d8bed.ngrok-free.app'],
    proxy: {
      '/wp-json': {
        target: 'https://blog.sapiensclinic.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});