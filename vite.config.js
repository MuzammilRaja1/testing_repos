// // vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // if using React
import path from 'path';

export default defineConfig({
  plugins: [react()], // or other relevant plugins
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // This resolves '@' to 'src' folder
    },
  },
});
