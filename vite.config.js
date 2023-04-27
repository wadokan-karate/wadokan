import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/react-marketplace/",
  plugins: [react()],
  test: {
  environment: "jsdom",
  globals: true
  } 
})
