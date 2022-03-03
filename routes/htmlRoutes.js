// const path = require('path');

// const router = require('express').Router();

// // create route for notes file
// router.get('/notes', (req, res) => {
//     res.sendFile(path.join (__dirname, '../public/notes.html'));
// });

// // create route for html file
// router.get('*', (req, res) => {
//     res.sendFile(path.join (__dirname, '../public/index.html'));
// });

// module.exports = router;

// dependencies
const path = require("path");
const router = require("express").Router();

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// if no matching route is found, default to home
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

module.exports = router;
