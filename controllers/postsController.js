const postsData = require("../data/postsData.js");

// # index
function index(req, res) {
  res.json(postsData);
}

// # show
function show(req, res) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    res.status(418).send("id not valid");
    return;
  }

  if (id > postsData.length - 1 || id < 0) {
    res.status(404).send("id not found");
  }

  res.json(postsData[id]);
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
  const { id } = req.params;
  res.send(`Eliminazione del post con indice ${id}`);
}

module.exports = { index, show, store, update, modify, destroy };
