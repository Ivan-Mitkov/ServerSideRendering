import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import serialize from "serialize-javascript";
import Routes from "../client/Routes";

//pass req object from server
const renderer = (req, store,context) => {
  // console.log("static routes: req.path", req.path);
  const content = renderToString(
    <Provider store={store}>
      {/* //get url from req object from express */}
      {/* //passing context from index.js for errors */}
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  return `<html>
     <head></head>
    <body>
        <div id="root">${content}</div>
        <script>
            window.INITIAL_STATE=${serialize(store.getState())}
            </script>
       <script src="bundle.js"></script>
    </body>
  </html>
  `;
};

export default renderer;
