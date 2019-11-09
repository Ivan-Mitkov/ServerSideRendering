import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/Routes";

//pass req object from server
const renderer = (req) => {
    console.log('static routes: req.path',req.path)
  const content = renderToString(
      //get url from req object from express 
    <StaticRouter location={req.path} context={{}}>
      <Routes />
    </StaticRouter>
  );
  return `<html>
     <head></head>
    <body>
        <div id="root">
            ${content}
            <script src="bundle.js"></script>
        </div>
    </body>
  </html>
  `;
};

export default renderer;
