"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsTo(models.User, {
        as: "user",
        foreignKey: "id_user",
      });
      Student.hasOne(models.Tutorship, {
        as: "tutorship",
        foreignKey: "id_student",
      });
    }
  }
  Student.init(
    {
      id_user: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Student",
      tableName: "students",
    }
  );
  return Student;
};
