const bcrypt = require("bcrypt");
const { User, Student } = require("../../models");
/**
 * Create new user
 * Url example: [POST] http://localhost:3000/auth/register
 * @param {*} req Request object
 * @param {*} res Response object
 */
module.exports = async (req, res) => {
  const { id_role, user_name, user_last_name, email, password, birthday } =
    req.body;

  if (password.length < 8) {
    return res.status(400).json({
      status: "Error",
      message:
        "Password need atleast 8 characters, uncluding Uppercase and symbols",
    });
  }

  try {
    const hash = bcrypt.hashSync(password, 10);

    const newUser = {
      id_role,
      user_name,
      user_last_name,
      email,
      password: hash,
      birthday,
    };

    const user = await User.create(newUser);

    const newStudent = {
      id_user: user.id,
    };

    await Student.create(newStudent);

    res.status(201).json({
      message: "User has been created successfully",
    });
  } catch (error) {
    const statusCode =
      error.name == "SequelizeUniqueConstraintError" ||
      error.name == "SequelizeValidationError"
        ? 400
        : 500;

    res.status(statusCode).json({
      status: "Error",
      message: error.message,
    });
  }
};
