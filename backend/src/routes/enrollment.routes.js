import { Router } from "express";
import {
  getEnrollment,
  enrollCourse,
  updateProgress,
} from "../controllers/enrollment.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.post("/:courseId", verifyJWT, enrollCourse);
router.route("/me").get(verifyJWT, getEnrollment);
router.route("/:id/progress").put(verifyJWT, updateProgress);

export default router;
