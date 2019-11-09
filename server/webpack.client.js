const path = require("path");
const merge=require("webpack-merge");
const baseConfig=require("./webpack.base");
const config = {
  //target browser so remove node

  //what is the roo file of client app
  entry: "./src/client/client.js",

  //where to put outfile that is generated
  output: {
    //name
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  }
};

module.exports=merge(baseConfig,config)
