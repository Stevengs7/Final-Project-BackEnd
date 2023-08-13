const { Tutorship } = require("../../models");

module.exports = async (req, res) => {
  try {
    const { id } = req.body;

    await Tutorship.destroy({ where: { id: id } });
    res.status(200).json({
      message: "Tutorship deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};
