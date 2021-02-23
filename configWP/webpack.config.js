const path = require('path')

module.exports = {
entry: './index.js',
output:  {
    path: path.resolve(__dirname, 'dist'),
    filename:'bundler.js'
},
module: {
rules: [
    {
    teste: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader"
    }
   }
  ]
 },
}
