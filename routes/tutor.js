const express = require("express");
const tutorController = require("../controllers/tutor");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

/* GET Students */
router.get("/all-students", tutorController.getStudents);

/* GET My Profile */
router.get("/my-profile", verifyToken, tutorController.myProfile);

/* GET My Profile */
router.put(
  "/tutorship-update/:id",
  verifyToken,
  tutorController.updateTutorship
);

module.exports = router;
