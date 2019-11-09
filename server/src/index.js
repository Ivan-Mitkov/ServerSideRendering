// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home= require('./client/components/Home').default;

//webpack is doing it's magic by looking after server side js:)
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const app = express();
//tell express to open public folder to the world
app.use(express.static("public"));
app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  const html = `
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
  res.send(html);
});

app.listen(3000, () => console.log("app listen on port 3000"));
