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
    server: {
        host: 'localhost', // hoặc '0.0.0.0' để cho phép truy cập ngoài LAN
        port: 5147, // port bạn muốn dùng
        strictPort: true, // nếu port đã dùng thì sẽ error luôn, không nhảy qua port khác
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },

    base: '/home',
});
