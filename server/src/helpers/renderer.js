import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";
import Routes from "../client/Routes";

//pass req object from server
const renderer = (req, store) => {
  // console.log("static routes: req.path", req.path);
  const content = renderToString(
    <Provider store={store}>
      {/* //get url from req object from express */}
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  return `<html>
     <head></head>
    <body>
        <div id="root">${content}</div>
        <script>
            window.INITIAL_STATE=${JSON.stringify(store.getState())}
            </script>
       <script src="bundle.js"></script>
    </body>
  </html>
  `;
};

export default renderer;
