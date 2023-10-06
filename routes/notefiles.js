const express = require("express");
const NoteFile = require("../models/notesfileschema");

const route = express.Router();

//for frontend

route.get("/getNoteFiles" , async(req , res)=>
{
    try{
        const subjectName = req.query.subjectName;;
        const courseName = req.query.courseName;
        const semesterNumber = req.query.semesterNumber;

        const result = await NoteFile.find({
            subjectName : subjectName,
            semesterNumber : semesterNumber,
            courseName : courseName
        });
        res.status(200).json({notefiles:result, sucess:true})
        }
    catch(error)
        {
        res.status(500).json({message:error.message, sucess:false});
        }
});

// for backend

route.get("/getAllNoteFiles" , async(req , res) =>
{
    try
    {
        const result = await NoteFile.find({});
        res.status(200).json({notefiles:result, sucess:true});
    }
    catch(error)
    {
        res.status(500).json({message:error.message,sucess:false});
    }
})

route.post("/addNewNoteFile", async(req , res)=>
{
    try
    {
        const notefile = await NoteFile.create({
            fileName:req.body.fileName,
            uploadedBy: req.body.uploadedBy,
            fileDownloadUrl:req.body.fileDownloadUrl,
            courseName:req.body.courseName,
            semesterNumber : req.body.semesterNumber,
            courseName:req.body.courseName,
            semesterNumber:req.body.semesterNumber,
            subjectName:req.body.subjectName

        });
        res.status(200).json({note:notefile,sucess:true});
    }
    catch(error)
    {
        res.status(500).json({sucess:false,message:error.message});
    }

});

route.delete("/deleteNoteFileById",async(req,res)=>
{
    try
    {
        const noteFileId = req.query.noteFileId;
        await NoteFile.deleteOne({_id:noteFileId});

    
    res.status(200).json({sucess:true});
    }
    catch(error)
    {
        res.status(500).json({sucess:false});
    }
});

module.exports = route;
