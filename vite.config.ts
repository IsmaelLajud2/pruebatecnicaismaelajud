import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    compression({
      algorithm: 'gzip',  // El algoritmo de compresión
      threshold: 10240,   // Comprime archivos que tengan más de 10KB
      ext: '.gz',         // La extensión para los archivos comprimidos
      verbose: true,      // Muestra información detallada en la consola
    }),
  ],
  build: {
    // Aquí es donde habilitamos la minificación de JavaScript
    minify: 'esbuild', // O también puedes usar 'terser' si prefieres
    target: 'es2015',   // Asegura que el código se compile para una versión moderna de JavaScript
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,  // Limita el tamaño de los archivos antes de mostrar advertencias
  },
});
