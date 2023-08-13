const { Subject, Tutor, User } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const subject = await Subject.findByPk(id, {
      attributes: {
        exclude: ["id_role", "createdAt", "updatedAt", "password"],
      },
      include: [
        {
          model: Tutor,
          as: "tutor",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          include: {
            model: User,
            as: "user",
            attributes: {
              exclude: ["password", "createdAt", "updatedAt"],
            },
          },
        },
      ],
    });
    res.status(200).json(subject);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
