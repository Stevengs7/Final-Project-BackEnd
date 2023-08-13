const express = require("express");
const studentController = require("../controllers/student");
const verifyToken = require("../middlewares/verifyToken");
const isStudent = require("../middlewares/isStudent");
const router = express.Router();

/* GET Tutors */
router.get("/all-tutors", studentController.getTutors);

/* GET My Profile */
router.get("/my-profile", verifyToken, isStudent, studentController.myProfile);

/* UPDATE My Profile */
router.put("/update-profile", verifyToken, studentController.updateProfile);

/* Create tutorship */
router.post("/tutorship-create", verifyToken, studentController.newTutorship);

/* GET my tutorships */
router.get("/my-tutorships", verifyToken, studentController.allMyTutorships);

/* GET my tutorships */
router.delete(
  "/tutorship-delete",
  verifyToken,
  studentController.deleteTutorship
);

module.exports = router;
