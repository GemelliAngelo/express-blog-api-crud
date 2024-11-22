// # INIT EXPRESS
const express = require("express");
const app = express();
const port = 3001;
const postsRouter = require("./routers/posts");

// # EXPRESS ROUTING
app.use(express.static("public"));
app.use("/posts", postsRouter);

// # JSON PARSER FOR BODY REQUEST
app.use(express.json());

// # HOMEPAGE
app.get("/", (req, res) => {
  res.send(`<h1>SERVER DEL MIO BLOG</h1>`);
});

// # SERVER LISTENING
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
