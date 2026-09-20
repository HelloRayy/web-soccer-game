import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0', // Expose to all IPv4 local Wi-Fi interfaces so HP can connect
    port: 5173,
    strictPort: false,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
          icons: ['lucide-react'],
          qrcode: ['qrcode.react'],
          peerjs: ['peerjs'],
        },
      },
    },
  },
});
