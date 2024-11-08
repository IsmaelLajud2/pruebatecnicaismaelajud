import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    compression({
      algorithm: 'gzip', 
      threshold: 10240,   
      ext: '.gz',         
      verbose: true,      
    }),
  ],
  build: {
  
    minify: 'esbuild', 
    target: 'es2015',   
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true, 
  },
});
