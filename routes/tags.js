const express = require("express");
const router = express.Router();
const tagsController = require("../controllers/tags");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - simplified for now

router.post("/createTag/:id", tagsController.createTag);

module.exports = router;
