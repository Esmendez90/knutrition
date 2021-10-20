const express = require("express");

const router = express.Router();

// Routes
// =========================================================
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/nutricion", function (req, res) {
  res.render("nutricion");
});

router.get("/cutis", function (req, res) {
  res.render("cutis");
});

router.get("/cuerpo", function (req, res) {
  res.render("cuerpo");
});

router.get("/laser", function (req, res) {
  res.render("laser");
});

router.get("/especiales", function (req, res) {
  res.render("especiales");
});

// For some reason this route has to be after the other routes
// otherwise the other routes won't work. Spoooky!!! =0
// router.get("/", function (req, res) {
//     res.render("index");
// });

// Export routes for server.js to use.
module.exports = router;
