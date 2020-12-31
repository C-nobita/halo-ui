import typescript from "rollup-plugin-typescript2"
// import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"
import dts from "rollup-plugin-dts";
import image from 'rollup-plugin-img';

export default [
  {
    input: 'src/lib/index.ts',
    output: [{
      globals: {
        vue: 'Vue'
      },
      name: 'Halo-ui',
      file: 'dist/halo-ui.js',
      format: 'umd',
      plugins: [terser()]
    }, {
      name: 'Halo-ui',
      file: 'dist/halo-ui.esm.js',
      format: 'es',
      plugins: [terser()]
    }],
    plugins: [
      image({
        limit: 10000
      }),
      scss({ include: /\.scss$/, sass: dartSass }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
          'include': [
            'src/lib/*',
            'src/typings/vue-shim.d.ts',
          ],
          'exclude': [
            'node_modules',
            '__tests__',
          ],
        },
        abortOnError: false,
        clean: true,
      }),
      vue({
        include: /\.vue$/,
      })
    ],
  }, {
    input: 'src/lib/types/index.d.ts',
    output: [{ file: "dist/halo-ui.d.ts", format: "es" }],
    plugins: [dts()],
  }]