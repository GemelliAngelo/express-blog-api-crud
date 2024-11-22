// # INIT EXPRESS
const express = require("express");
const app = express();

// # DOTENV CONFIG
require("dotenv").config();

// # DOTENV PROCESS DATA
const port = process.env.HOST_PORT;
const domain = process.env.HOST_DOMAIN;

// # ROUTER INPORT
const postsRouter = require("./routers/postsRouter");

// # JSON PARSER FOR BODY REQUEST
app.use(express.json());

// # PUBLIC STATIC ASSETS
app.use(express.static("public"));

// # EXPRESS ROUTING
app.use("/posts", postsRouter);

// # HOMEPAGE
app.get("/", (req, res) => {
  res.send(`<h1>SERVER DEL MIO BLOG</h1>`);
});

// # SERVER LISTENING
app.listen(port, () => {
  console.log(`App listening at ${domain}:${port}`);
});
