import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },

    thumbnailUrl: {
      type: String,
    },

    category: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      unique: true,
    },

    lessons: [
      {
        title: String,
        contentHtml: String,
        videoUrl: String,
        order: Number,
      },
    ],
  },
  { timestamps: true },
);

export const Course = mongoose.model("Course", courseSchema);
