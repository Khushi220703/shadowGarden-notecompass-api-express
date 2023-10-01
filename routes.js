const express = require("express");
const route = express.Router();

const courses = require("./routes/courses");
const subjects = require("./routes/subjects");
const notes = require("./routes/notes");
const notefile = require("./routes/notefiles");

route.use("/courses",courses); // Starting endpoint-> /api/courses/
route.use("/subjects",subjects);
route.use("/notes",notes);
route.use("/notefile",notefile);
module.exports = route;
