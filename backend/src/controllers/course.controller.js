import { Course } from "../models/course.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
// createCourse
const createCourse = asyncHandler(async (req, res) => {
  const { title, description, price, category, difficulty, thumbnailUrl } =
    req.body;

  if (!title || !description || !price || !category || !difficulty) {
    throw new ApiError(400, "All fields are required");
  }

  const slug = title.toLowerCase().trim().replace(/\s+/g, "-");

  const course = await Course.create({
    title,
    description,
    price,
    category,
    difficulty,
    thumbnailUrl,
    slug,
  });

  return res
    .status(201)
    .json(new ApiResponse(201, course, "Course created successfully"));
});

//getAllCourses
const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find();

  return res
    .status(200)
    .json(new ApiResponse(200, courses, "Courses fetched successfully"));
});

//getCourseById
const getCourseById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const course = await Course.findById(id);

  if (!course) {
    throw new ApiError(404, "Course not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, course, "Course fetched successfully"));
});

//updateCourse
const updateCourse = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const updatedCourse = await Course.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedCourse) {
    throw new ApiError(404, "Course not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedCourse, "Course updated successfully"));
});

//deletecourse

const deleteCourse = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedCourse = await Course.findByIdAndDelete(id);

  if (!deletedCourse) {
    throw new ApiError(404, "Course not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Course deleted successfully"));
});

const getCourseBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;

  const course = await Course.findOne({ slug });

  if (!course) {
    throw new ApiError(404, "Course not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, course, "Course fetched successfully"));
});

export {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
  getCourseBySlug,
};
