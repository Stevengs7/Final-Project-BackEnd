"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "subjects",
      [
        {
          subject_name: "English", // 1
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subject_name: "Spanish", // 2
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subject_name: "Mathematics", // 3
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subject_name: "Science", // 4
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subject_name: "History", // 5
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subject_name: "Art", // 6
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subject_name: "Music", // 7
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subject_name: "Computer Science", // 8
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
