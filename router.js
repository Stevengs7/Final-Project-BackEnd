const express = require("express");
const router = express.Router();
const adminRouter = require("./routes/admin");
const indexRouter = require("./routes/index");

// home page
router.use("/", indexRouter);

//Admin
router.use("/api/admin", adminRouter);

module.exports = router;
