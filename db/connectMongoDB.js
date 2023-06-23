const mongoose = require("mongoose");
export const connectMongoDb = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        maxPoolSize: 10, // Maintain up to 10 socket connections
        serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
        socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
        family: 4, // Use IPv4, skip trying IPv6
      })
      .then(() => {
        console.log("Now connected to MongoDB!");
      })
      .catch((err) => {
        console.log("Something went wrong", err.message);
      });
  } catch (err) {}
};

export const closeMongoDb = () => {
  try {
    mongoose.disconnect();
    console.log("Now Closed to MongoDB!");
  } catch (err) {}
};
