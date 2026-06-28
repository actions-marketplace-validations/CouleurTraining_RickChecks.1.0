const path = require('path');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs', // Keeps output compatible with GitHub Actions environment
  },
  resolve: {
    // Crucial: Tells Webpack how to read the ESM exports maps inside @actions/github
    conditionNames: ['node', 'import', 'require', 'default'], 
  },
};
