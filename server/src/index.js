// const express = require("express");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const Home= require('./client/components/Home').default;

//webpack is doing it's magic by looking after server side js:)
import express from "express";
import renderer from "./helpers/renderer";

const app = express();
//tell express to open public folder to the world
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send(renderer());
});

app.listen(3000, () => console.log("app listen on port 3000"));
