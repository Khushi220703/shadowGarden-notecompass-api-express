const mongoose = require("mongoose");

const CoursesSchema = new mongoose.schema({
    courseName:{type:String,requried:true},
    nouberOfSemester : {type:Number,requried:true},
},
    {timestamps:true},
);

module.exports = mongoose.model("Courses",CoursesSchema);