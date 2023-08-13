const subjectController = {};

//General
subjectController.getSubjects = require("./getSubjects");

//subject by pk
subjectController.getSubjectPk = require("./findSubjectByID");

module.exports = subjectController;
