import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react'
import { reactRouter } from '@react-router/dev/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '/',
    plugins: [
        reactRouter(),
        tsconfigPaths()
    ],
    server: {    
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 5000  
        port: 5000, 
    },
});
