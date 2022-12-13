
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));
const joinCurrentDir = (...paths: string[]) => join(__dirname, ...paths)

export default defineConfig({
  root: joinCurrentDir('./packages/normal'),
  build: {
    lib: {
      entry: './index.ts',
      name: 'normal',
      fileName: 'normal',
      formats: ['cjs', 'es']
    }
  },
  plugins: [dts({ tsConfigFilePath: joinCurrentDir('./tsconfig.json') })]
})