import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from "mongoose";
const morgan = require("morgan");
require("dotenv").config();

// create express app
const app = express();

// Mongo DB
mongoose
  .connect(process.env.DATABASE, {
    // userNewUrlParser: true,
    // userFindAndModify: false,
    // userUnifiedTopology: true,
    // userCreateIndex: true,
  })
  .then(() => console.log("DB Connected Success"))
  .catch((err) => console.log("DB Connection Error =>", err));

// apply middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log("This is own middleware");
  next();
});

// route
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
// port
const port = process.env.PORT || 4001;

app.listen(port, () => console.log(`Server is running on port ${port}`));
