const express = require("express");
const router = express.Router();
const Person = require("../controllers/personController");

router.get("/person", Person.getPerson);

module.exports = router;
