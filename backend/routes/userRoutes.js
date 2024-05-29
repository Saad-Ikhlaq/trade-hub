import express from "express";
import {
  authUser,
  registerUser,
  userProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  googleAuth,
  verifyEmail,
} from "../controllers/userController.js";
import { fetchUser, adminAuth } from "../middlewares/fetchUser.js";

const router = express.Router();

router.route("/login").post(authUser);
router
  .route("/profile")
  .get(fetchUser, userProfile)
  .put(fetchUser, updateUserProfile);

router.route("/").post(registerUser).get(fetchUser, adminAuth, getUsers);
router.route("/google").post(googleAuth);

router
  .route("/:id")
  .delete(fetchUser, adminAuth, deleteUser)
  .get(fetchUser, adminAuth, getUserById)
  .put(fetchUser, adminAuth, updateUser);

router.route("/verify-email/:verificationString").put(verifyEmail);

export default router;
