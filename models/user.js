"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Role, {
        as: "role",
        foreignKey: "id_role",
      });
      User.hasOne(models.Student, {
        as: "student",
        foreignKey: "id_user",
      });
      User.hasOne(models.Tutor, {
        as: "tutor",
        foreignKey: "id_user",
      });
    }
  }
  User.init(
    {
      user_name: {
        type: DataTypes.STRING,
        validate: {
          is: {
            msg: "Name is not valid",
            args: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
          },
        },
      },
      user_last_name: {
        type: DataTypes.STRING,
        validate: {
          is: {
            msg: "Last name is not valid",
            args: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
          },
        },
      },
      birthday: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
          isAfter: "1920-01-01",
        },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: {
            msg: "Email is not valid",
          },
        },
      },
      password: DataTypes.STRING,
      id_role: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  return User;
};
