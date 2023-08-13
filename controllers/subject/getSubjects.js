const { User, Tutor, Subject } = require("../../models");

module.exports = async (req, res) => {
  let { page } = req.query;
  page = +page;
  const LIMIT = 10;
  const totalSubjects = await Subject.count();
  const maxPages = Math.ceil(totalSubjects / LIMIT);
  if (!page || page < 0) page = 1;

  try {
    if (page <= maxPages) {
      const subjects = await Subject.findAll({
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
              exclude: ["createdAt", "updatedAt"],
            },
            include: [
              {
                model: User,
                as: "user",
                attributes: {
                  exclude: ["password", "createdAt", "updatedAt"],
                },
              },
            ],
          },
        ],
      });
      res.status(200).json({
        info: {
          count: totalSubjects,
          page,
          pages: maxPages,
        },
        results: {
          subjects,
        },
      });
    } else {
      res.json("There are no tutors to show in this page");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
