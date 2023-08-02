"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tutorship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tutorship.belongsTo(models.Tutor, {
        as: "tutor",
        foreignKey: "id_tutor",
      });
      Tutorship.belongsTo(models.Student, {
        as: "student",
        foreignKey: "id_student",
      });
    }
  }
  Tutorship.init(
    {
      id_dentist: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_patient: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        isDate: true,
      },
      time: DataTypes.TIME,
      location: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tutorship",
      tableName: "tutorships",
    }
  );
  return Tutorship;
};
