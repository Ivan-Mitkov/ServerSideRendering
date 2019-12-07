const path = require("path");
const merge=require("webpack-merge");
const baseConfig=require("./webpack.base");
const webpackNodeExternals=require("webpack-node-externals")

const config = {
  //inform webpack that we are building a bundle for
  //nodeJS, not for a browser
  target: "node",

  //what is the root file of server app
  entry: "./src/index.js",

  //where to put outfile that is generated
  output: {
    //name
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals:[
    webpackNodeExternals()
  ] 
};

module.exports=merge(baseConfig,config)