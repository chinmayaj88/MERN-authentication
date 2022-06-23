const express = require("express");
const {
  register,
  verify,
  login,
  logout,
  getMyProfile,
  updatePassword,
  forgetPassword,
  resetPassword,
} = require("../controllers/userController");
const { isAuthenticated } = require("../middleware/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/verify").post(isAuthenticated, verify);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticated, getMyProfile);
router.route("/updatePassword").put(isAuthenticated, updatePassword);
router.route("/forgotPassword").post(forgetPassword);
router.route("/resetPassword").put(resetPassword);

module.exports = router;
