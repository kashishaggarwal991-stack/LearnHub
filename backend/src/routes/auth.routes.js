import { Router } from "express";
import {
  logIn,
  signUp,
  getCurrentUser,
} from "../controllers/auth.controller.js";

const router = Router();

router.route("/register").post(signUp);
router.route("/logIn").post(logIn);
router.route("/me").get(getCurrentUser);

export default router;
