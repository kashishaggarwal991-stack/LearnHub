import { app } from "./app.js";
import { connectDB } from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 5005;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening at ${port}`);
    });
  })
  .catch((err) => {
    console.log("error connecting db", err);
  });
