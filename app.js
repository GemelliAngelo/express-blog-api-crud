// # INIT EXPRESS
const express = require("express");
const app = express();
const port = 3000;
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
  console.log(`App listening on port ${port}`);
});
