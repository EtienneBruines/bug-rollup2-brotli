import brotli from 'rollup-plugin-brotli'

export default [{
  input: ['index.js'],
  output: {
    dir: 'dist/',
    // format: 'amd'
  },
  plugins: [
    brotli(),
  ]
}
]
