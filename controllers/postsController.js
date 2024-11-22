// * DATABASE CONFIG
const postsData = require("../data/postsData.js");

// # INDEX
function index(req, res) {
  const tag = req.query.tag ?? "";
  let filteredPost = postsData;
  if (tag) {
    filteredPost = postsData.filter((post) => {
      return post.tags.includes(tag);
    });
  }

  res.json(filteredPost);
}

// # SHOW
function show(req, res) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(418).send("id not valid");
  }

  if (id > postsData.length - 1 || id < 0) {
    return res.status(404).send("id not found");
  }

  const post = postsData.find((post) => post.id === id);
  res.json(post);
}

// # STORE
function store(req, res) {
  const id = postsData.at(-1).id + 1;

  if (
    !req.body.title ||
    !req.body.content ||
    !req.body.image ||
    !req.body.tags?.length
  ) {
    return res.status(400).send({ error: "Missing data not found" });
  }

  const newPost = {
    id: id,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags,
  };

  postsData.push(newPost);
  res.json(postsData);
}

// # UPDATE
function update(req, res) {
  const { id } = req.params;
  res.send(`Modifica integrale del post con indice ${id}`);
}

// # MODIFY
function modify(req, res) {
  const { id } = req.params;
  res.send(`Modifica parziale del post con indice ${id}`);
}

// # DESTROY
function destroy(req, res) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(418).send({ error: "id not valid" });
  }

  if (id < 0) {
    return res.status(404).send({ error: "id not found" });
  }

  const deletedPost = postsData.find((post) => post.id === id);
  const postIndex = postsData.indexOf(deletedPost);

  if (postIndex === -1) {
    return res.status(404).send({ error: "id not found" });
  }

  postsData.splice(postIndex, 1);
  console.log(postsData);

  res.sendStatus(204);
}

// # EXPORTS
module.exports = { index, show, store, update, modify, destroy };
