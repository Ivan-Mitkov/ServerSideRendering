module.exports={
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
}