module.exports = (req, res, next) => {
  const { userRole } = req;
  if (userRole != "tutor") {
    res.status(403).json({
      status: "Error",
      message: "Don't have permission, contact the administrator",
    });
  } else {
    next();
  }
};
