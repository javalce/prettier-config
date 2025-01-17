import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],
  shims: true,
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  cjsInterop: true,
  splitting: true,
});
