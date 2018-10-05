const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.json({status: "main route"}));

module.exports = router;
