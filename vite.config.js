import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({mode})=>{
  const env = loadEnv(mode, process.cwd());
  return {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    plugins: [vue()],
    optimizeDeps: {
      exclude: ['vue-demi']
  },
    server:{
      open:true,
      hmr:true
    },
    build:{
      outDir: 'dist',
      lib: {
        entry: resolve(__dirname,'src/index.ts'),
        name:'@wsfe/ctree'
      }
    }
  }
})