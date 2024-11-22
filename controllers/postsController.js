// * DATABASE INPORT
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
    return res.status(400).send({ error: "id not valid" });
  }

  if (id > postsData.length - 1 || id < 0) {
    return res.status(400).send({ error: "id not found" });
  }

  const post = postsData.find((post) => post.id === id);

  if (!post) {
    res.status(400).send({ error: "Data not found" });
  }

  res.json(post);
}

// # STORE
function store(req, res) {
  const id = postsData.at(-1).id + 1;
  const { title, content, image, tags } = req.body;

  if (!title || !content || !image || !tags?.length) {
    return res.status(400).send({ error: "Missing data not found" });
  }

  const newPost = {
    id: id,
    title: title,
    content: content,
    image: image,
    tags: tags,
  };

  postsData.push(newPost);
  console.log(postsData);
  res.sendStatus(204);
}

// # UPDATE
function update(req, res) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(418).send({ error: "id not valid" });
  }

  if (id > postsData.length - 1 || id < 0) {
    return res.status(400).send({ error: "id not found" });
  }

  let post = postsData.find((post) => post.id === id);

  if (!post) {
    res.status(400).send({ error: "Data not found" });
  }

  const { title, content, image, tags } = req.body;

  if (!title || !content || !image || !tags?.length) {
    return res.status(400).send({ error: "Missing data not found" });
  }

  (post.id = id),
    (post.title = title),
    (post.content = content),
    (post.image = image),
    (post.tags = tags);

  console.log(postsData);

  res.sendStatus(204);
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
    return res.status(400).send({ error: "id not valid" });
  }

  if (id < 0) {
    return res.status(400).send({ error: "id not found" });
  }

  const deletedPost = postsData.find((post) => post.id === id);
  const postIndex = postsData.indexOf(deletedPost);

  if (postIndex === -1) {
    return res.status(400).send({ error: "id not found" });
  }

  postsData.splice(postIndex, 1);
  console.log(postsData);

  res.sendStatus(204);
}

// # EXPORTS
module.exports = { index, show, store, update, modify, destroy };
