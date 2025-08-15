    import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react'; // Or your framework's plugin

    // export default defineConfig({
    //   plugins: [react()], // Include your framework's plugin
    //   server: {
    //     // port: 8080,
    //     proxy: {
    //       '/api': { // This is the path your frontend will request (e.g., /api/users)
    //         target: 'http://localhost:8080', // The URL of your backend API server
    //         changeOrigin: true, // Changes the origin of the host header to the target URL
    //         rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Removes the /api prefix before forwarding
    //         // secure: false, // Optional: Set to false if your target uses self-signed certificates (e.g., in development)
    //       },
    //       // You can add more proxy rules here for different paths
    //       // '/auth': {
    //       //   target: 'http://localhost:4000',
    //       //   changeOrigin: true,
    //       // },
    //     },
    //   },
    // });

    export default defineConfig({
  plugins: [react()],
  server: {
    // port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api')
      }
    }
  }
})