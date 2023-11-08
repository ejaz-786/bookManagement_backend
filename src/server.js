import app from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

// database connection
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
    // start a server
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw err;
    });
  })
  .catch((err) => {
    console.log("mongodb connection error: ", err);
  });
