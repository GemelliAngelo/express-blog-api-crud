// # ROUTER DATA
const express = require("express");
const router = express.Router();
const postsController = require("../controllers/postsController.js");

// # ROUTER METHOD
router.get("/", postsController.index);
router.get("/:id", postsController.show);
router.post("/", postsController.store);
router.put("/:id", postsController.update);
router.patch("/:id", postsController.modify);
router.delete("/:id", postsController.destroy);

// # EXPORTS
module.exports = router;
