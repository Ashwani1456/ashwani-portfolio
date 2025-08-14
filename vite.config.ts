import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

// ✅ Vite Configuration
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    // 🌐 Dev Server Settings
    server: {
      host: '::', // Accept connections from all IPv6 addresses
      port: 8080, // Required by Render
      allowedHosts: ['ashwani-portfolio-7zux.onrender.com'], // Whitelist Render's public URL
      open: false, // Don't auto-open browser
    },

    // 🔌 Plugins
    plugins: [
      react(), // Fast React refresh with SWC
      isDev && componentTagger(), // Tag components only in dev mode
    ].filter(Boolean),

    // 📁 Path Aliases
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Use '@/components/...' etc.
      },
    },

    // 🏗️ Build Configuration
    build: {
      outDir: 'dist', // Output folder for production build
      sourcemap: isDev, // Enable sourcemaps in dev for debugging
      emptyOutDir: true, // Clean dist before build
    },

    // 🧪 Vitest Configuration (if used)
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
    },
  };
});