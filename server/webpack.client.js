const path = require("path");

module.exports = {
  //target browser so remove node

  //what is the roo file of client app
  entry: "./src/client/client.js",

  //where to put outfile that is generated
  output: {
    //name
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
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
