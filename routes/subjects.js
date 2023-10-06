const express = require("express");
const route = express.Router();
const Subject = require("../models/subjectschema");


route.get("/getsubjectByCourseAndSemester",async(
     req,res)=>{
        try{

            const courseName = req.query.courseName;
            const semesterNamber = req.query.Router
            semesterNamber;
            const result = awit Subjects.find({
                coursName : courseName,
                semesterNumber :semesterNumber,
            });
            res.status(200).json({Subject:result,
            success:true});
        }catch(error){
            res.status(500).json({error:MessageChannel.error
                ,success:false});
            }
            });
        

            route.get("/getALLSubjects",async(req,res)=>{
                try{
                    const subjects = await Subjects.find();
                    res.status(200).json({subjects:subjects,
                    sucess:true});

                }catch(error){
                    res.status(500).json({success:false,
                    message:error.message});
                }
            });
    

            route.post("/addSubject",async(req,res)=>{
                try{
                    const subject = await Subjects.create({
                        subjectName : req.body.subjectName,
                        courseName : req.body.coursName,
                        semesterNamber : req.body.
                        semesterNamber,
                    });
                    res.status(200).json({subject:subject,
                    success:true});
                }catch(error){
                    res.status(500).json({success:false,
                    message:error.message});

                }
            })
            route.put("/updateSubject",async(req,res)=>{
                try{
                    await Subject.updateOne({_id:req.body._id},
                        {
                            subjectName : req.body. 
                            semesterNamber,
                        });
                        res.status(200).json({success:true});
                    }catch(error){
                        res.status(500).json({success:false,
                        message:error.message});
                    }
                })

                route.delete("/deleteSubject",async(req,res)=>{
                    try{
                        const subjectId = req.query.subjectId;await Subject.deleteOne({
                            _id:subjectId});
                            res.status(200).json({success:true});
                        }catch(error){

                        }
                    })

                    module.exports = route;
