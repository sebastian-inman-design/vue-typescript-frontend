"use strict"

const express = require("express");
const router = express.Router();

router.post("/webhook/alert", (req, res) => {

  const socket = req.app.get("socket");
  socket.emit("TRIGGER", {...{action: "Alert"}, ...req.body});
  res.sendStatus(200);

});

module.exports = router;