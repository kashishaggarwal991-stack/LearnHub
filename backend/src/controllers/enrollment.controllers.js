import { Enrollment } from "../models/enrollment.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Course } from "../models/course.models.js";
//enroll in course
const enrollCourse = asyncHandler(async (req, res) => {
  const { courseId } = req.params;
  const course = await Course.findById(courseId);
  if (!course) {
    throw new ApiError(404, "Course not found");
  }

  const existingCourse = await Enrollment.findOne({
    userId: req.user._id,
    courseId,
  });

  if (existingCourse) {
    throw new ApiError(400, "Already enrolled");
  }

  const enrollment = await Enrollment.create({
    userId: req.user._id,
    courseId,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, enrollment, "Course enrolled successfully"));
});

//get all enrollments
const getEnrollment = asyncHandler(async (req, res) => {
  const enrollments = await Enrollment.find({
    userId: req.user._id,
  }).populate("courseId");

  return res
    .status(200)
    .json(
      new ApiResponse(200, enrollments, "Enrollments fetched successfully"),
    );
});

//update progress
const updateProgress = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { progress } = req.body;

  if (progress < 0 || progress > 100) {
    throw new ApiError(400, "Progress must be between 0 and 100");
  }

  const enrollment = await Enrollment.findById(id);

  if (!enrollment) {
    throw new ApiError(404, "Enrollment not found");
  }

  if (enrollment.userId.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "Unauthorized");
  }

  enrollment.progress = progress;

  await enrollment.save();

  return res
    .status(200)
    .json(new ApiResponse(200, enrollment, "Progress updated successfully"));
});

export { enrollCourse, getEnrollment, updateProgress };
