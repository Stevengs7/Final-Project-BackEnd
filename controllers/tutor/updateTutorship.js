const { successMsg, errorMsg } = require("../../_utils/messages");
const { Tutorship } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;
  try {
    const modify = { ...req.body };

    await Tutorship.update(modify, { where: { id: id } });
    res.status(200).json({
      message: successMsg.tutorship.UPDATED,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: errorMsg.tutorship.UPDATED,
    });
  }
};
