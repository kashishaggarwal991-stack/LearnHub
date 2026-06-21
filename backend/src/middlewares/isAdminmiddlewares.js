import { ApiError } from "../utils/ApiError.js";

export const verifyAdmin = (req, res, next) => {
  if (req.user?.role !== "Admin") {
    throw new ApiError(403, "Admin access required");
  }

  next();
};
