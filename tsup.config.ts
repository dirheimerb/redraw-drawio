import { defineConfig, type Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entryPoints: ['src/index.ts'],
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  splitting: true,
  treeshake: true,
  replaceNodeEnv: true,
  sourcemap: true,
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  ...options,
}));
