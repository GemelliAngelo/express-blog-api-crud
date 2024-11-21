const express = require("express");
const router = express.Router();

const posts = [
  {
    title: "Ciambellone",
    content: "Contenuto1",
    image: "/ciambellone.jpeg",
    tags: [""],
  },
  {
    title: "Cracker alla barbabietola ",
    content: "Contenuto2",
    image: "/cracker_barbabietola.jpeg",
    tags: [""],
  },
  {
    title: "Pane fritto dolce",
    content: "Contenuto3",
    image: "/pane_fritto_dolce.jpeg",
    tags: [""],
  },
  {
    title: "Pasta alla barbabietola",
    content: "Contenuto4",
    image: "/pasta_barbabietola.jpeg",
    tags: [""],
  },
  {
    title: "Torta paesana",
    content: "Contenuto5",
    image: "/torta_paesana.jpeg",
    tags: [""],
  },
];

// * INDEX
router.get("/", (req, res) => {
  res.json(posts);
});

// * SHOW
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    res.status(418).send("id not valid");
    return;
  }

  if (id > posts.length - 1 || id < 0) {
    res.status(404).send("id not found");
  }

  res.json(posts[id]);
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
