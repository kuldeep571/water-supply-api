const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1/water");
    console.log("Database Connected Successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
    // Throw the error to be caught by the calling function or handle it appropriately
    throw error;
  }
};

module.exports = dbConnect;
