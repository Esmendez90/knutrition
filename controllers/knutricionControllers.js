const express = require("express");

const router = express.Router();

// Routes
// =========================================================
// router.get("/nutricion", function (req, res) {
//   res.sendFile(path.join(__dirname, "/public/views/nutricion.html"));
// });

// router.get("/cutis", function (req, res) {
//   res.sendFile(path.join(__dirname, "/public/views/cutis.html"));
// });

// router.get("/cuerpo", function (req, res) {
//   res.sendFile(path.join(__dirname, "/public/views/cuerpo.html"));
// });

// router.get("/laser", function (req, res) {
//   res.sendFile(path.join(__dirname, "/public/views/laser.html"));
// });

// router.get("/especiales", function (req, res) {
//   res.sendFile(path.join(__dirname, "/public/views/especiales.html"));
// });

// For some reason this route has to be after the other routes
// otherwise the other routes won't work. Spoooky!!! =0
router.get("*", function (req, res) {
    //console.log("wth is this?", res);
    res.render("index");
});

// Export routes for server.js to use.
module.exports = router;
