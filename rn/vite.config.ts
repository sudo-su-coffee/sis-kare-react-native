import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: ['4173-ibf6c8sn1b8869xkqs568-b9b8269a.us3.manus.computer'],
  },
});
