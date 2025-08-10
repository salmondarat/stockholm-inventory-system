import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/.next/**',
      '**/tests/e2e/**',
      '**/playwright/**',
    ],
  },
  resolve: {
    alias: {
      '@stockholm/types': resolve(__dirname, './packages/types/src'),
      '@stockholm/utils': resolve(__dirname, './packages/utils/src'),
      '@stockholm/ui': resolve(__dirname, './packages/ui/src'),
      '@stockholm/db': resolve(__dirname, './packages/db/src'),
      '@': resolve(__dirname, './website/src'),
    },
  },
});
