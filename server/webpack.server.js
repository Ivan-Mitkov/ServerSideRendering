const path = require("path");

module.exports = {
  //inform webpack that we are building a bundle for
  //nodeJS, not for a browser
  target: "node",

  //what is the roo file of server app
  entry: "./src/index.js",

  //where to put outfile that is generated
  output: {
    //name
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  //tell webpack to run babel on every file
  module: {
    rules: [
      {
        //only .js files
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            //for async code
            "stage-0",
            [
              "env",
              {
                targets: {
                  browsers: ["last 2 versions"]
                }
              }
            ]
          ]
        }
      }
    ]
  },
};
