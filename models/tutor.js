"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tutor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tutor.belongsTo(models.User, {
        as: "user",
        foreignKey: "id_user",
      });
      Tutor.belongsTo(models.Subject, {
        as: "subject",
        foreignKey: "id_subject",
      });
      Tutor.hasOne(models.Tutorship, {
        as: "tutorship",
        foreignKey: "id_tutor",
      });
    }
  }
  Tutor.init(
    {
      id_subject: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
      verificated: DataTypes.ENUM("yes", "no"),
    },
    {
      sequelize,
      modelName: "Tutor",
      tableName: "tutors",
    }
  );
  return Tutor;
};
