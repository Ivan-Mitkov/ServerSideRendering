import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";

const renderer = () => {
  const content = renderToString(<Home />);
  return `
  <html>
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
