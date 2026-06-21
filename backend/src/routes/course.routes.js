import { Router } from "express";
import {
  getCourseById,
  getAllCourses,
  deleteCourse,
  updateCourse,
  createCourse,
  getCourseBySlug,
} from "../controllers/course.controller.js";

import { verifyAdmin } from "../middlewares/isAdminmiddlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/").post(verifyJWT, verifyAdmin, createCourse).get(getAllCourses);

router.get("/slug/:slug", getCourseBySlug);

router
  .route("/:id")
  .get(getCourseById)
  .put(verifyJWT, verifyAdmin, updateCourse)
  .delete(verifyJWT, verifyAdmin, deleteCourse);

export default router;
