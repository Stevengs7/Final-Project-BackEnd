const tutorController = {};

//General
tutorController.getStudents = require("./allStudents");

//My profile
tutorController.myProfile = require("./myProfile");

//Update tutorship
tutorController.updateTutorship = require("./updateTutorship");

module.exports = tutorController;
