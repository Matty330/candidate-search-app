import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  envDir: resolve(__dirname, 'environment'), // Add this line to specify the environment folder
});

// https://vitejs.dev/config/
