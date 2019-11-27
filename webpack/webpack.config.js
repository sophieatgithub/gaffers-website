module.exports = {
    module: {
        loaders: [
          { test: /\.css$/, loader: "style-loader!css-loader" },
          // ...
        ]
      },
      entry: "./src/scripts/app.js",//path relative to this file
      output: {
          filename: "./dist/app.bundle.js"//path relative to this file
      }      
}