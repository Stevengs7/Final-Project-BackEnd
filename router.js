const express = require("express");
const router = express.Router();

const indexRouter = require("./routes/index");

// home page
router.use("/", indexRouter);

/* // authentication
router.use("/auth", authRouter);

//Admin
router.use("/api/admin", adminRouter);

// Patient
router.use("/api/users", usersRouter);

// Dentist
router.use("/api/dentist", dentistRouter); */

module.exports = router;
