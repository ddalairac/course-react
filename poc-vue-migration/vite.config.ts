import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs'
import path from 'path'


const isDevEnv = process?.env?.NODE_ENV === 'development' || false;
const isMockMode = process?.env?.npm_lifecycle_event === 'dev-mode-mock' || false;
// logs in terminal
console.log('isDevEnv', isDevEnv)
console.log('isMockMode', isMockMode)


// https://vitejs.dev/config/
export default defineConfig({
  base: '/actions/',
  server: {
    host: '0.0.0.0', // any host
    port: 8103, 
    strictPort: true, // Vite will exit if port is occupied

    // just for local env
    ...(isDevEnv) ? {
      open: !isMockMode ? 'http://devserver.perceptyx.com/actions/': 'http://localhost:8103/actions/',
      // only for devserver
      ...(isDevEnv && !isMockMode) ? {
        https: {
          key: fs.readFileSync(path.resolve(__dirname, './certs/localhost.key.pem')),
          cert: fs.readFileSync(path.resolve(__dirname, './certs/localhost.cert.pem')),
          ca: fs.readFileSync(path.resolve(__dirname, './certs/dev_cert_ca.cert.pem')),
        }
      } : {},
    } : {}
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  plugins: [react()],
})
