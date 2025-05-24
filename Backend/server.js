require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { logger } = require("./middleware/logger");
const Errorhandler = require("./middleware/Errorhandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/DBconn.js");
const mongoose = require("mongoose");
const { logEvents } = require("./middleware/logger.js");
const { checkToken, checkVerified } = require("./middleware.js");
const PORT = process.env.PORT || 3500;

console.log(process.env.NODE_ENV);

connectDB();

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cookieParser());

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/root"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(
  "/api/students",
  checkToken,
  checkVerified,
  require("./routes/studentRoutes.js")
);

// csa -> child sponsor allotment
app.use(
  "/api/allotment",
  // checkToken,
  // checkVerified,
  require("./routes/csaRoutes.js")
);

app.use(Errorhandler);

mongoose.connection.once("open", () => {
  console.log("connection to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});
