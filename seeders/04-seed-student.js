"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "students",
      [
        {
          id_user: 10,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 11,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 12,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 13,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 14,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 15,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 16,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 17,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 18,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 19,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 20,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 21,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 22,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 23,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 24,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 25,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 26,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 27,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 28,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 29,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          id_user: 30,
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
