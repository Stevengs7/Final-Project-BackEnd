"use strict";

const bcrypt = require("bcrypt");

const password = "12345678";
const encryptedPassword = bcrypt.hashSync(password, 10);

// ---------------------------------------------------------------------

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          user_name: "Admin", // 1
          user_last_name: "Json",
          birthday: "1996-08-02",
          email: "admin@admin.com",
          password: encryptedPassword,
          id_role: 1,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Oliver", // 2
          user_last_name: "Wilson",
          birthday: "2000-08-02",
          email: "oliver@wilson.com",
          password: encryptedPassword,
          id_role: 2,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Ava", // 3
          user_last_name: "Anderson",
          birthday: "2001-04-14",
          email: "ava@anderson.com",
          password: encryptedPassword,
          id_role: 2,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "William", // 4
          user_last_name: "Martinez",
          birthday: "2002-01-27",
          email: "william@martinez.com",
          password: encryptedPassword,
          id_role: 2,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Mia", // 5
          user_last_name: "Taylor",
          birthday: "2001-06-09",
          email: "mia@taylor.com",
          password: encryptedPassword,
          id_role: 2,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "James", // 6
          user_last_name: "Lee",
          birthday: "2001-09-16",
          email: "james@lee.com",
          password: encryptedPassword,
          id_role: 2,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Lily", // 7
          user_last_name: "Moore",
          birthday: "1996-12-01",
          email: "lily@moore.com",
          password: encryptedPassword,
          id_role: 2,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Benjamin", // 8
          user_last_name: "Harris",
          birthday: "2003-03-19",
          email: "benjamin@harris.com",
          password: encryptedPassword,
          id_role: 2,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Aria", // 9
          user_last_name: "Clark",
          birthday: "2002-08-08",
          email: "aria@clark.com",
          password: encryptedPassword,
          id_role: 2,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Henry", // 10
          user_last_name: "Lewis",
          birthday: "2013-11-27",
          email: "henry@lewis.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Amelia", // 11
          user_last_name: "Jackson",
          birthday: "2008-02-14",
          email: "amelia@jackson.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "John", // 12
          user_last_name: "Smith",
          birthday: "2010-04-15",
          email: "john@smith.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Liam", // 13
          user_last_name: "Williams",
          birthday: "2017-07-11",
          email: "liam@williams.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Olivia", // 14
          user_last_name: "Brown",
          birthday: "2016-03-05",
          email: "olivia@brown.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Noah", // 15
          user_last_name: "Davis",
          birthday: "2015-11-18",
          email: "noah@davis.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Sophia", // 16
          user_last_name: "Garcia",
          birthday: "2015-05-30",
          email: "sophia@garcia.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Jackson", // 17
          user_last_name: "Smith",
          birthday: "2010-02-10",
          email: "jackson@smith.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Ella", // 18
          user_last_name: "Parker",
          birthday: "2011-04-05",
          email: "ella@parker.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Daniel", // 19
          user_last_name: "Gonzalez",
          birthday: "2011-08-20",
          email: "daniel@gonzalez.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Avery", // 20
          user_last_name: "Robinson",
          birthday: "2013-01-10",
          email: "avery@robinson.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Ethan", // 21
          user_last_name: "Clark",
          birthday: "2015-03-25",
          email: "ethan@clark.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Evelyn", // 22
          user_last_name: "Morris",
          birthday: "2016-10-15",
          email: "evelyn@morris.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Henry", // 23
          user_last_name: "Hughes",
          birthday: "2013-12-05",
          email: "henry@hughes.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Madison", // 24
          user_last_name: "Foster",
          birthday: "2011-06-12",
          email: "madison@foster.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Samuel", // 25
          user_last_name: "Baker",
          birthday: "2007-02-28",
          email: "samuel@baker.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Aubrey", // 26
          user_last_name: "Scott",
          birthday: "2012-11-08",
          email: "aubrey@scott.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Carter", // 27
          user_last_name: "Rogers",
          birthday: "2014-03-03",
          email: "carter@rogers.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Ella", // 28
          user_last_name: "Howard",
          birthday: "2009-04-05",
          email: "ella@howard.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Isaac", // 29
          user_last_name: "Patterson",
          birthday: "2009-08-20",
          email: "isaac@patterson.com",
          password: encryptedPassword,
          id_role: 3,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          user_name: "Grace", // 30
          user_last_name: "Barnes",
          birthday: "2008-01-10",
          email: "grace@barnes.com",
          password: encryptedPassword,
          id_role: 3,
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
