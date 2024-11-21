const postsData = require("../data/postsData.js");

// # index
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

// # show
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

// # store
function store(req, res) {
  res.send(`Aggiunta di un post`);
}

// # update
function update(req, res) {
  const { id } = req.params;
  res.send(`Modifica integrale del post con indice ${id}`);
}

// # modify
function modify(req, res) {
  const { id } = req.params;
  res.send(`Modifica parziale del post con indice ${id}`);
}

// # destroy
function destroy(req, res) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(418).send("id not valid");
  }

  if (id < 0) {
    return res.status(404).send("id not found");
  }

  const deletedPost = postsData.find((post) => post.id === id);
  const postIndex = postsData.indexOf(deletedPost);

  if (postIndex === -1) {
    return res.status(404).send("id not found");
  }

  postsData.splice(postIndex, 1);

  res.json(postsData);
}

module.exports = { index, show, store, update, modify, destroy };
