const { successMsg } = require("../../_utils/messages");
const { Tutorship, Student } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { userId } = req;

    const student = await Student.findOne({
      where: { id_user: userId },
    });

    const newTutorship = { ...req.body, id_student: student.id };
    await Tutorship.create(newTutorship);
    res.status(201).json({
      message: successMsg.tutorship.CREATED,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
