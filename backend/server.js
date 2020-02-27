const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./Admin/AdminRoutes/adminRoutes");
const studentRoutes = require("./studentRoutes");
const instructor = require("./InstructorRoute/instructor");
const instLogrouter = require("./login/instLogRoute");
const PORT = 4000;

mongoose
  .connect(
    "mongodb://localhost:27017/school_database",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch(err => {
    console.log(err.message);
  });

//Middlewares
app.use(cors());
app.use(bodyParser.json());


//MiddlewaresAdmin
app.use("/api", router);

//MiddlewaresStudent
app.use("/api/student", studentRoutes);

//Instructor
app.use("/api/instructor", instructor);

//Middlewre instructor login
// app.use("/api", instLogrouter);

app.listen(PORT, function() {
  console.log("Server is running on port : " + PORT);
});
