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
const app = express(); // Create an Express app
app.use(cors({ origin: "https://almabetter-yt-subscriber.vercel.app" })); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: false }));

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

const server = app.listen(PORT, () => {
  console.log("listening on PORT: " + PORT); // Start the server and log the listening port
});

module.exports = server; // Export the server for testing
