// dependencies
const path = require("path");
const router = require("express").Router();

// path to notes page
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// if no matching route is found, default to home page
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
