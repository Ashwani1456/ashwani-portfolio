import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 🌐 Dev Server Configuration
  server: {
    host: '::', // Accept connections from all IPv6 addresses
    port: 8080,
    allowedHosts: ['ashwani-portfolio-7zux.onrender.com'], // ✅ Fix for Render deployment
    open: false, // Prevent auto-opening browser
  },

  // 🔌 Plugins
  plugins: [
    react(),
    mode === 'development' && componentTagger(), // Only tag components in dev
  ].filter(Boolean),

  // 📁 Path Aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // 🏗️ Build Options
  build: {
    outDir: 'dist',
    sourcemap: mode === 'development', // Enable sourcemaps in dev
    emptyOutDir: true,
  },

  // 🧪 Test Config (optional if using Vitest)
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
}))