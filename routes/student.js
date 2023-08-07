const express = require("express");
const studentController = require("../controllers/student");
const verifyToken = require("../middlewares/verifyToken");
const router = express.Router();

/* GET Tutors */
router.get("/all-tutors", studentController.getTutors);

/* GET My Profile */
router.get("/my-profile", verifyToken, studentController.myProfile);

/* Create tutorship */
router.post("/tutorship-create", verifyToken, studentController.newTutorship);

/* GET my tutorships */
router.get("/my-tutorships", verifyToken, studentController.allMyTutorships);

module.exports = router;
