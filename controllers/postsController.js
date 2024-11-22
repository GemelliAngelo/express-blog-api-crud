// * DATABASE INPORT
const postsData = require("../data/postsData.js");

// # INDEX
function index(req, res) {
  // * variables
  const tag = req.query.tag ?? "";
  let filteredPost = postsData;

  // * if query exists
  if (tag) {
    filteredPost = postsData.filter((post) => {
      return post.tags.includes(tag);
    });
  }

  // * output
  res.json(filteredPost);
}

// # SHOW
function show(req, res) {
  // * variable
  const id = parseInt(req.params.id);

  // * managing error
  if (isNaN(id)) {
    return res.status(400).send({ error: "id not valid" });
  }

  // * variable
  const post = postsData.find((post) => post.id === id);

  // * managing error
  if (!post) {
    res.status(400).send({ error: "Data not found" });
  }

  // * output
  res.json(post);
}

// # STORE
function store(req, res) {
  // * variables
  const id = postsData.at(-1).id + 1;
  const { title, content, image, tags } = req.body;

  // * managing error
  if (!title || !content || !image || !tags?.length) {
    return res.status(400).send({ error: "Missing data not found" });
  }

  // * variable
  const newPost = {
    id: id,
    title: title,
    content: content,
    image: image,
    tags: tags,
  };

  postsData.push(newPost);

  // * output
  console.log(postsData);
  res.sendStatus(204);
}

// # UPDATE
function update(req, res) {
  // * variable
  const id = parseInt(req.params.id);

  // * managing error
  if (isNaN(id)) {
    return res.status(418).send({ error: "id not valid" });
  }

  // * variable
  let post = postsData.find((post) => post.id === id);

  //  * managing error
  if (!post) {
    res.status(400).send({ error: "Data not found" });
  }

  // * variable
  const { title, content, image, tags } = req.body;

  // * managing error
  if (!title || !content || !image || !tags?.length) {
    return res.status(400).send({ error: "Missing data not found" });
  }

  (post.id = id),
    (post.title = title),
    (post.content = content),
    (post.image = image),
    (post.tags = tags);

  // * output
  console.log(postsData);
  res.sendStatus(204);
}

// # MODIFY
function modify(req, res) {
  // * variables
  const { id } = req.params;

  // * output
  res.send(`Modifica parziale del post con indice ${id}`);
}

// # DESTROY
function destroy(req, res) {
  // * variables
  const id = parseInt(req.params.id);

  // * managing errors
  if (isNaN(id)) {
    return res.status(400).send({ error: "id not valid" });
  }

  if (id < 0) {
    return res.status(400).send({ error: "id not found" });
  }

  // * variables
  const deletedPost = postsData.find((post) => post.id === id);
  const postIndex = postsData.indexOf(deletedPost);

  // * managing errors
  if (postIndex === -1) {
    return res.status(400).send({ error: "id not found" });
  }

  postsData.splice(postIndex, 1);

  // * output
  console.log(postsData);
  res.sendStatus(204);
}

// # EXPORTS
module.exports = { index, show, store, update, modify, destroy };
