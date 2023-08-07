const { User, Tutor, Subject } = require("../../models");

module.exports = async (req, res) => {
  let { page } = req.query;
  page = +page;
  const LIMIT = 10;
  const totalTutor = await Tutor.count();
  const maxPages = Math.ceil(totalTutor / LIMIT);
  if (!page || page < 0) page = 1;

  try {
    if (page <= maxPages) {
      const tutors = await Tutor.findAll({
        limit: LIMIT,
        offset: (page - 1) * LIMIT,
        attributes: {
          exclude: ["id_subject", "createdAt", "updatedAt"],
        },
        include: [
          {
            model: User,
            as: "user",
            attributes: {
              exclude: ["id", "password", "id_role", "createdAt", "updatedAt"],
            },
          },
          {
            model: Subject,
            as: "subject",
            attributes: {
              exclude: ["id", "createdAt", "updatedAt"],
            },
          },
        ],
      });
      res.status(200).json({
        info: {
          count: totalTutor,
          page,
          pages: maxPages,
        },
        results: {
          tutors,
        },
      });
    } else {
      res.json("There are no tutors to show in this page");
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
