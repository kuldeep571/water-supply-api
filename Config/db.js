const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
     // const conn = await mongoose.connect("mongodb://127.0.0.1/e-comm");
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("bro Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;