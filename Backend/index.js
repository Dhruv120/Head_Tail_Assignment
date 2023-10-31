const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
// require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");
const PORT=4000;
const MONGO_URL="mongodb+srv://dhd44255:dhd44255@cluster0.nttlszy.mongodb.net/finalassignment"
// const { MONGO_URL, PORT } = process.env;


mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);