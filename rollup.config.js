import Ts from 'rollup-plugin-typescript2'
import scss from 'rollup-plugin-scss'

export default {
  input: ['src/index.ts'],
  output: {
    dir: 'lib',
    format: 'esm',
    sourcemap: true,
  },
  plugins: [
    Ts(),
    scss({
      include: ['/**/*.css', '/**/*.scss', '/**/*.sass'],
      output: 'lib/css/style.css',
      failOnError: true,
    }),
  ],
  preserveModules: true,
  external: ['react'],
}
