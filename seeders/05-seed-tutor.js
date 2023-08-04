"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tutors",
      [
        {
          id_user: 2,
          id_subject: 1,
          verificated: "yes",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 3,
          id_subject: 2,
          verificated: "yes",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 4,
          id_subject: 3,
          verificated: "yes",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 5,
          id_subject: 4,
          verificated: "yes",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 6,
          id_subject: 5,
          verificated: "yes",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 7,
          id_subject: 6,
          verificated: "yes",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 8,
          id_subject: 7,
          verificated: "yes",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 9,
          id_subject: 8,
          verificated: "yes",
          updatedAt: new Date(),
          createdAt: new Date(),
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
