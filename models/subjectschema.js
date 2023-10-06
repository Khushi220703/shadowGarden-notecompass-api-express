const mongoose =  require("mongoose");

const subjectsSchema = new mongoose.Schema({
    subjectName: {type:String,required:true},
    courseName: {type:String,required:true},
    semesterNumber : {type:Number,required:true},
});

module.exports = mongoose.model{"Subjects",subjectsSchema};