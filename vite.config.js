import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import peggyLoader from "vite-plugin-peggy-loader";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/wavy/',
  plugins: [react(), peggyLoader()],
})
