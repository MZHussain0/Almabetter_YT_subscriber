const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv").config();
const subscribersRoutes = require("./routes/subscriberRoutes");
const errorHandler = require("./middlewares/errorHandler");
const connectDb = require("./config/dbConnection");

// DATABASE CONNECTIONS //
connectDb();

// CONFIGURATION //
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
//
// ROUTES //
app.use("/subscribers", subscribersRoutes);

//404 route
app.get("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 not found" });
  } else {
    res.type("text").send("404 Not Found");
  }
});

app.use(errorHandler);

// MONGOOSE SETUP //
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log("listening on PORT: " + PORT);
});
