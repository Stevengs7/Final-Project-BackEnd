const { User, Tutor, Student, Tutorship } = require("../../models");

module.exports = async (req, res) => {
  let { page } = req.query;
  page = +page;
  const LIMIT = 2;
  const totalTutorships = await Tutorship.count();
  const maxPages = Math.ceil(totalTutorships / LIMIT);
  if (!page || page < 0) page = 1;

  const { userId } = req;

  try {
    if (page <= maxPages) {
      const tutor = await Tutor.findOne({
        where: { id_user: userId },
      });
      const tutorships = await Tutorship.findAll({
        where: { id_tutor: tutor.id },
        limit: LIMIT,
        offset: (page - 1) * LIMIT,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: Student,
            as: "student",
            attributes: {
              exclude: ["id", "createdAt", "updatedAt"],
            },
            include: [
              {
                model: User,
                as: "user",
                attributes: {
                  exclude: [
                    "id",
                    "password",
                    "id_role",
                    "birthday",
                    "createdAt",
                    "updatedAt",
                  ],
                },
              },
            ],
          },
        ],
      });
      res.status(200).json({
        info: {
          count: totalTutorships,
          page,
          pages: maxPages,
        },
        results: {
          tutorships,
        },
      });
    } else {
      res.json("There is nothing here");
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
