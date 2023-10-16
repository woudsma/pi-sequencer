import path from 'path'
import esbuild from 'esbuild'
import babel from 'esbuild-plugin-babel'

esbuild
  .build({
    bundle: true,
    absWorkingDir: path.join(process.cwd(), 'src/frontend'),
    platform: 'browser',
    entryPoints: ['index.jsx'],
    outdir: path.join(process.cwd(), 'dist/frontend/'),
    // watch: process.argv.includes('--watch'),
    splitting: false,
    chunkNames: 'chunks/[name]-[hash]',
    treeShaking: true,
    sourcemap: false,
    minify: process.argv.includes('--production'),
    drop: process.argv.includes('--production') ? ['console'] : [],
    logLevel: 'info',
    // Set of ESLint plugins
    plugins: [
      // Configures bundle with Babel. Babel configuration defined in babel.config.js
      // Babel translates JS code to make it compatible with older JS versions.
      // https://github.com/nativew/esbuild-plugin-babel
      babel()
    ]
  })
  .catch(() => process.exit(1))
