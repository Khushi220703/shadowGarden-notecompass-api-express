const mongoose = require("mongoose");

const NoteFIleSchema = new mongoose.Schema({
    fileName : {type:String,required:true},
    uploadedBy : {type:String,required:true},
    fileDoloadUrl : {type:String,required:true},
    courseName : {type:String,required:true},
    subjectName : {type:String,required:true},
    semesterNumber : {type:String,required:true},
    uploadBy : {type:String,required:true},
},
    {timestamps:true},
);

module.exports = mongoose.model{"NoteFile",NoteFIleSchema};
