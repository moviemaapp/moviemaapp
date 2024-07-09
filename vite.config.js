import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/


const bases = {
  development: '/',
  production: '/moviemaapp/',
  staging: '/moviemaapp/projetos/',
};

const currentBase = bases[process.env.NODE_ENV] || '/';

export default defineConfig({
  plugins: [react()],
  base: currentBase,
})
