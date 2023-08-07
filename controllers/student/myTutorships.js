const { User, Tutor, Subject, Student, Tutorship } = require("../../models");

module.exports = async (req, res) => {
  let { page } = req.query;
  page = +page;
  const LIMIT = 10;
  const totalTutorships = await Tutorship.count();
  const maxPages = Math.ceil(totalTutorships / LIMIT);
  if (!page || page < 0) page = 1;

  const { userId } = req;

  try {
    if (page <= maxPages) {
      const student = await Student.findOne({
        where: { id_user: userId },
      });

      const tutorships = await Tutorship.findAll({
        where: { id_student: student.id },
        limit: LIMIT,
        offset: (page - 1) * LIMIT,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        include: [
          {
            model: Tutor,
            as: "tutor",
            attributes: {
              exclude: ["id", "id_role", "id_user", "createdAt", "updatedAt"],
            },
            include: [
              {
                model: User,
                as: "user",
                attributes: {
                  exclude: [
                    "id",
                    "id_role",
                    "password",
                    "birthday",
                    "createdAt",
                    "updatedAt",
                  ],
                },
              },
              {
                model: Subject,
                as: "subject",
                attributes: {
                  exclude: ["createdAt", "updatedAt"],
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
      res.json("There are no tutorships to show in this page");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
