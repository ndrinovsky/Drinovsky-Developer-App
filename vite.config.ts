import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from "@tailwindcss/vite";
import devtoolsJson from 'vite-plugin-devtools-json';

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '/',
    plugins: [
        reactRouter(),
        tailwindcss(),
        devtoolsJson(),
    ],
    resolve: {
        tsconfigPaths: true,
    },
    server: {    
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 5000  
        port: 5000, 
    },
});
