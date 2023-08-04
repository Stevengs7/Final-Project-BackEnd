const express = require("express");
const adminController = require("../controllers/admin/index");
const router = express.Router();

/* GET users */
router.get("/all-users", adminController.getAll);

module.exports = router;
