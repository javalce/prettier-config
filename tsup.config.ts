import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/config.ts'],
  shims: true,
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  treeshake: true,
  splitting: false,
});
