// # Raccolta dati
const express = require("express");
const router = express.Router();
const postsData = require("../data/postsData.js");
const postsController = require("../controller/postsController.js");

// # Routers
router.get("/", postsController.index);
router.get("/:id", postsController.show);
router.post("/", postsController.show);
router.put("/:id", postsController.update);
router.patch("/:id", postsController.modify);
router.delete("/:id", postsController.destroy);

module.exports = router;
