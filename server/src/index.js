import "babel-polyfill";

//webpack is doing it's magic by looking after server side js:)
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import { API_URL } from "../config";
import createStore from "./helpers/createStore";

const app = express();

//use proxy for authentication in middleware
app.use(
  "/api",
  proxy(`${API_URL}`, {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    }
  })
);

//tell express to open public folder to the world
app.use(express.static("public"));
//look for all routes
app.get("*", (req, res) => {
  //pass req object to create store to get the cookies later
  const store = createStore(req);

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      // console.log(route)
      return route.loadData ? route.loadData(store) : null;
    }) //wrap all promises with new Promise so if there are more external loading some can be resolved
    .map(promise => {
      //handle null values
      if (promise) {
        return new Promise((resolve, reject) => {
          //always resolve the inner promise
          promise.then(resolve).catch(resolve);
        });
      }
    });
  // console.log(matchRoutes(Routes,req.path))
  // console.log(promises)

  //wait for all promises to be resolved and then render server side
  Promise.all(promises).then(() => {
    //context for error handling
    const context = {};
    const content = renderer(req, store, context);
    if (context.notFound) {
      res.status(404);
    }
    //static router need to know the current path, BrowserRouter knows this out of the box
    res.send(content);
  });
});

app.listen(3000, () => console.log("app listen on port 3000"));
