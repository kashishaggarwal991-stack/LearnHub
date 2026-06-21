import express, { urlencoded } from "express";
import cors from "cors";

const app = express();

app.use(
  express.json({
    limit: "16kb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  }),
);

app.use(cors());

import authRouter from "./routes/auth.routes.js";
import courseRouter from "./routes/course.routes.js";
import enrollmentRouter from "./routes/enrollment.routes.js";
import { errorHandler } from "./middlewares/error.middlewares.js";

app.use("/api/v1/", authRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/enrollments", enrollmentRouter);
app.use(errorHandler);

export { app };
