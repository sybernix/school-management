const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./admin/adminRoutes");
const studentRoutes = require("./student/studentRoutes");
const teacher = require("./teacher/teacherRoutes");
const PORT = 4000;

mongoose
    .connect(
        "mongodb://localhost:27017/school_database",
        {useNewUrlParser: true}
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
app.use("/api", router);
app.use("/api/student", studentRoutes);
app.use("/api/teacher", teacher);

app.listen(PORT, function () {
    console.log("Server is running on port : " + PORT);
});
