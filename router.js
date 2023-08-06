const express = require("express");
const router = express.Router();
const adminRouter = require("./routes/admin");
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");

// home page
router.use("/", indexRouter);

// authentication
router.use("/auth", authRouter);

//Admin
router.use("/api/admin", adminRouter);

module.exports = router;
