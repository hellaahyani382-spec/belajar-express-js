var express = require('express');
var router = express.Router();

router.get("/mahasiswa", function (req, res, next) {
    res.render("mahasiswa_views", {
        nama: "hella",
        kelas: "MI.01",
        alamat: "sigli",
    });
});

module.exports = router;