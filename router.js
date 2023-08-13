const express = require("express");
const router = express.Router();
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const adminRouter = require("./routes/admin");
const studentRouter = require("./routes/student");
const tutorRouter = require("./routes/tutor");
const subjectRouter = require("./routes/subject");

// home page
router.use("/", indexRouter);

// authentication
router.use("/auth", authRouter);

//Admin
router.use("/api/admin", adminRouter);

//Student
router.use("/api/student", studentRouter);

//Tutor
router.use("/api/tutor", tutorRouter);

//subject
router.use("/api/subject", subjectRouter);

module.exports = router;
