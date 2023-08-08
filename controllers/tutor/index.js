const tutorController = {};

//General
tutorController.getStudents = require("./allStudents");

//My profile
tutorController.myProfile = require("./myProfile");

//My profile
tutorController.myTutorships = require("./myTutorships");

//Update tutorship
tutorController.updateTutorship = require("./updateTutorship");

module.exports = tutorController;
