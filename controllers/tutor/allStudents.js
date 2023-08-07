const { User, Student, Subject } = require("../../models");

module.exports = async (req, res) => {
  let { page } = req.query;
  page = +page;
  const LIMIT = 10;
  const totalStudent = await Student.count();
  const maxPages = Math.ceil(totalStudent / LIMIT);
  if (!page || page < 0) page = 1;

  try {
    if (page <= maxPages) {
      const students = await Student.findAll({
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
        ],
      });
      res.status(200).json({
        info: {
          count: totalStudent,
          page,
          pages: maxPages,
        },
        results: {
          students,
        },
      });
    } else {
      res.json("There are no students to show in this page");
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
