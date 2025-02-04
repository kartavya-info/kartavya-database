const User = require('../models/Users')
const Student = require('../models/Students')
const Sponsors = require('../models/Child_Sponsors')

const asyncHandler = require('express-async-handler')

//@desc Create New Student
//@route POST/Students
//@access Private
const AddNewStudent = asyncHandler(async (req,res) => {
    //console.log('hello')
    const {Roll_Number,Student_Name,Gender,DOB,School,Class,Fathers_Name,Fathers_Occupation,Mothers_Name,Mothers_Occupation,Address,Annual_Income,
        Centre,Curr_Session,Contact_No} = req.body

        //console.log(req.body, 'req.body')
    //confirm data
    if (!Roll_Number || !Student_Name || !Gender || !DOB || !Fathers_Name || !Centre){
        return res.status(400).json({message: "Please fill the compulsary information"})
    }

    //Count students in the centre
    //const student= await Student.countDocuments({ Centre }).exec();
    //May be we need to check age needs an additional dependency may be needed

    const duplicate = await Student.findOne({Roll_Number})
    if(duplicate){
        return res.status(400).json({message:"Roll Number already exists"})
    }

    if ((!School && Class) || (School && !Class)){
        return res.status(400).json({message: "Student must be in some School or Class"})
    }

    const StudentObject = {Roll_Number:Roll_Number,Student_Name:Student_Name,Gender:Gender,DOB:DOB,Class:Class,School:School,
        Fathers_Name:Fathers_Name,Fathers_Occupation:Fathers_Occupation,Mothers_name:Mothers_Name,Mothers_Occupation:Mothers_Occupation,
        Address:Address,Annual_Income:Annual_Income,Centre:Centre,Curr_Session:Curr_Session,Contact_No:Contact_No
    }

    const stud = await Student.create(StudentObject)
    if(stud){
        res.status(201).json({message: `New Student ${Student_Name} Added`})
    }else{
        res.status(400).json({message: 'Unable to Add Student'})
    }
})

//@desc Get all Students
//@route GET/Students
//@access Private
const getallStudents = asyncHandler(async (req,res) => {
    const students = await Student.find().select('-Fathers_name -Fathers_occupation -Mothers_name -Mothers_occupation -Gender -Annual_income -Sponsor -Sponsorship_percent -Curr_Session -Contact_No'
    ).lean()

    if (!students?.length){
        return res.status(400).json({message: 'No Student found'})
    }
    res.json(students)
})

//@desc Get a particular Student by Roll_number
//@route GET/Students
//@access Private
const getStudentbyRoll = asyncHandler(async (req,res) => {
    const Roll = req.params.Roll_Number;
    const student = await Student.findOne({Roll_Number: Roll}).exec();

    if (!student){
        return res.status(400).json({message: 'No Such Student found '})
    }
    res.json(student)
})

//@desc Update a particular Student by Roll_number
//@route PATCH/Students
//@access Private
const UpdateStudent = asyncHandler(async (req,res) => {
    const {Roll_Number,Student_Name,Gender,DOB,School,Class,Fathers_Name,Fathers_Occupation,Mothers_Name,Mothers_Occupation,Address,Annual_Income,
        Centre,Curr_Session,Contact_No} = req.body

    //confirm data
    if (!Roll_Number || !Student_Name || !Gender || !DOB || !Fathers_Name || !Centre){
        return res.status(400).json({message: "Please fill the compulsary information"})
    }

    //School and Sponsorship Constraints
    if ((!School && Class) || (School && !Class)){
        return res.status(400).json({message: "Student must be in some School or Class"})
    }

    //Contact number and Income constraint
    if(Contact_No && Contact_No.length!=10){
        return res.status(400).json({message: "Invalid Contact number"})
    }
    if(Annual_Income<=0){
        return res.status(400).json({message: "Invalid Annual Income"})
    }

    const student = await Student.findOne({Roll_Number}).exec()
    
    if(!student){
        return res.json({message: 'Student not found'})
    }
    
    //Object.assign(student,{Roll_number,Name,Gender,DOB,School,Class,Fathers_name,Fathers_occupation,Mothers_name,
        //Mothers_occupation,Address,Annual_income,Centre,Curr_Session,Contact_No})
    student.Student_Name=Student_Name
    student.Gender=Gender
    student.DOB=DOB
    student.School=School
    student.Centre=Centre
    
    const updatedstudent = await student.save()
    res.json({message: `${updatedstudent.Student_Name} updated`})
})

//@desc Delete a particular Student by Roll_number
//@route Delete/Students
//@access Private
const DeleteStudent = asyncHandler(async(req,res)=>{
    const roll_number = req.params.Roll_Number;
    console.log(roll_number);

    if(!roll_number){
            return res.status(400).json({message: 'Roll Number required'})
        }
    
    const student = await Student.findOne({Roll_Number: roll_number}).exec()
    if(!student){
        return res.status(400).json({message: 'student not found'})
    }

    if(student.Sponsorship_Status){
        return res.status(400).json({message:'First Cancel Sponsorship of Child'})
    }

    const result = await student.deleteOne()
    res.json({message: 'Student Deleted'})
})

module.exports = {
    AddNewStudent,
    getallStudents,
    getStudentbyRoll,
    UpdateStudent,
    DeleteStudent
}

