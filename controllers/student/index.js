const studentController = {};

//General
studentController.getTutors = require("./allTutors");

//My profile
studentController.myProfile = require("./myProfile");

//My profile
studentController.updateProfile = require("./updateMyProfile");

//Create Tutorship
studentController.newTutorship = require("./createTutorship");

//My Tutorships
studentController.allMyTutorships = require("./myTutorships");

//My Tutorships
studentController.deleteTutorship = require("./deleteTutorship");

module.exports = studentController;
