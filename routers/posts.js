const express = require("express");
const router = express.Router();
const postsData = require("../data/postsData.js");

// * INDEX
router.get("/", (req, res) => {
  res.json(postsData);
});

// * SHOW
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    res.status(418).send("id not valid");
    return;
  }

  if (id > postsData.length - 1 || id < 0) {
    res.status(404).send("id not found");
  }

  res.json(postsData[id]);
});

// * STORE
router.post("/", (req, res) => {
  res.send(`Aggiunta di un post`);
});

// * UPDATE
router.put("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Modifica integrale del post con indice ${id}`);
});

// * MODIFY
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Modifica parziale del post con indice ${id}`);
});

// * DESTROY

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Eliminazione del post con indice ${id}`);
});

module.exports = router;
