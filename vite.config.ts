import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './src')}`,
      '@/app/': `${path.resolve(__dirname, './src/views/app')}`,
    },
  },
  plugins: [
    react({
      include: [/\.tsx$/, /\.ts$/],
    }),
  ],
});
