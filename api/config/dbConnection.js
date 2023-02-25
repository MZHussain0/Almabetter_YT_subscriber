const mongoose = require("mongoose");
const Subscriber = require("../models/Subscriber");
const data = require("../data/data");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      "database connection established: ",
      connect.connection.host,
      connect.connection.name
    );
    // Subscriber.insertMany(data);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
