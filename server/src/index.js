import "babel-polyfill";

//webpack is doing it's magic by looking after server side js:)
import express from "express";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";

import createStore from "./helpers/createStore";

const app = express();
//tell express to open public folder to the world
app.use(express.static("public"));
//look for all routes
app.get("*", (req, res) => {
  const store = createStore();
  matchRoutes(Routes, req.path);

  //static router need to know the current path, BrowserRouter knows this out of the box
  res.send(renderer(req, store));
});

app.listen(3000, () => console.log("app listen on port 3000"));
