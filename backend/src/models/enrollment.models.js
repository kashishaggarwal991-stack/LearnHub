import mongoose, { Schema } from "mongoose";

const enrollmentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },

    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    enrolledAt: {
      type: Date,
    },
  },
  { timestamps: true },
);

export const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
