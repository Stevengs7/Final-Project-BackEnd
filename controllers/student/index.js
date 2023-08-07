const studentController = {};

//General
studentController.getTutors = require("./allTutors");

//My profile
studentController.myProfile = require("./myProfile");

//Create Tutorship
studentController.newTutorship = require("./createTutorship");

//My Tutorships
studentController.allMyTutorships = require("./myTutorships");

module.exports = studentController;
