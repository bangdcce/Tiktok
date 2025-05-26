import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths'; // ← import plugin
import path from 'path';

export default defineConfig({
    plugins: [
        react(),
        svgr(),
        tsconfigPaths(), // ← đưa plugin vào đây
    ],
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },
});
