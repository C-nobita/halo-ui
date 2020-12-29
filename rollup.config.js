import typescript from "rollup-plugin-typescript2"
import esbuild from 'rollup-plugin-esbuild'
import vue from 'rollup-plugin-vue'
import scss from 'rollup-plugin-scss'
import dartSass from 'sass';
import { terser } from "rollup-plugin-terser"

export default {
  input: 'src/lib/index.ts',
  output: [{
    globals: {
      vue: 'Vue'
    },
    name: 'Halo',
    file: 'dist/lib/halo.ts',
    format: 'umd',
    plugins: [terser()]
  }, {
    name: 'Halo',
    file: 'dist/lib/halo.esm.ts',
    format: 'es',
    plugins: [terser()]
  }],
  plugins: [
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === 'production',
      target: 'es2015' 
    }),
    typescript(),
    vue({
      include: /\.vue$/,
    })
  ],
}