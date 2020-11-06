"use strict"

const express = require("express");
const router = express.Router();
const path = require("path");

router.use(express.static(path.join(__dirname, "../../../build/")));
router.use((req, res) => res.sendFile(path.join(__dirname, "../../../build/index.html")));

module.exports = router;
