const express = require("express");
const subjectController = require("../controllers/subject");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

/* GET subjects */
router.get("/all-subjects", subjectController.getSubjects);

/* GET Subject by Pk */
router.get("/subject/:id", verifyToken, subjectController.getSubjectPk);

module.exports = router;
