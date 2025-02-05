const User = require("../models/Users");
const Student = require("../models/Students");
const Sponsors = require("../models/Child_Sponsors");

const asyncHandler = require("express-async-handler");

// @desc Create New Student
// @route POST/Students
// @access Private
const addNewStudent = asyncHandler(async (req, res) => {
  const {
    studentName,
    gender,
    dob,
    school,
    class: studentClass,
    fathersName,
    fathersOccupation,
    mothersName,
    mothersOccupation,
    address,
    annualIncome,
    centre,
    currentSession,
    contactNumber,
  } = req.body;

  if (
    !studentName ||
    !gender ||
    !dob ||
    !fathersName ||
    !centre
  ) {
    return res
      .status(400)
      .json({ message: "Please fill the compulsory information" });
  }


  if ((!school && studentClass) || (school && !studentClass)) {
    return res
      .status(400)
      .json({ message: "Student must be in some school or class" });
  }
  if(Contact_No && Contact_No.length!=10){
        return res.status(400).json({message: "Invalid Contact number"})
    }
  if(Annual_Income<=0){
      return res.status(400).json({message: "Invalid Annual Income"})
  }

  //Generate new Roll Number
  const lastStudent = await Student.findOne().sort({ rollNumber: -1 });

  // Extract the last sequence number and increment it
  let lastSequenceNumber = lastStudent ? parseInt(lastStudent.rollNumber.split('/')[2]) : 1;
  let newSequenceNumber = lastSequenceNumber + 1;

  // Generate the new roll number
  let newRollNumber = `K/DHN/${newSequenceNumber}`;
  
  const studentObject = {
    rollNumber:newRollNumber,
    studentName,
    gender,
    dob,
    school,
    class: studentClass,
    fathersName,
    fathersOccupation,
    mothersName,
    mothersOccupation,
    address,
    annualIncome,
    centre,
    currentSession,
    contactNumber,
  };

  const stud = await Student.create(studentObject);
  if (stud) {
    res.status(201).json({ message: `New Student ${studentName} with ${newrollNumber} Roll Number Added. Please write on Physical Form also` });
  } else {
    res.status(400).json({ message: "Unable to Add Student" });
  }
});

// @desc Get all Students
// @route GET/Students
// @access Private
const getAllStudents = asyncHandler(async (req, res) => {
  const students = await Student.find()
    .select(
      "-fathersName -fathersOccupation -mothersName -mothersOccupation -gender -annualIncome -sponsor -sponsorshipPercent -currSession -contactNo"
    )
    .lean();

  // if no student is there then return empty array -> change made by Amit Bhagat

  // if (!students?.length) {
  //   return res.status(400).json({ message: "No Student found" });
  // }

  res.json(students);
});

// @desc Get a particular Student by rollNumber
// @route GET/Students/:rollNumber
// @access Private
const getStudentByRoll = asyncHandler(async (req, res) => {
  const rollNumber = req.params.rollNumber;
  const student = await Student.findOne({ rollNumber }).exec();

  if (!student) {
    return res.status(400).json({ message: "No Such Student found " });
  }
  res.json(student);
});

// @desc Update a particular Student by rollNumber
// @route PATCH/Students
// @access Private
const updateStudent = asyncHandler(async (req, res) => {
  const {
    rollNumber,
    studentName,
    gender,
    dob,
    school,
    class: studentClass,
    fathersName,
    fathersOccupation,
    mothersName,
    mothersOccupation,
    address,
    annualIncome,
    centre,
    currentSession,
    contactNo,
  } = req.body;

  if (
    !rollNumber ||
    !studentName ||
    !gender ||
    !dob ||
    !fathersName ||
    !centre
  ) {
    return res
      .status(400)
      .json({ message: "Please fill the compulsory information" });
  }

  if ((!school && studentClass) || (school && !studentClass)) {
    return res
      .status(400)
      .json({ message: "Student must be in some school or class" });
  }

  if (contactNo && contactNo.length !== 10) {
    return res.status(400).json({ message: "Invalid Contact number" });
  }
  if (annualIncome <= 0) {
    return res.status(400).json({ message: "Invalid Annual Income" });
  }

  const student = await Student.findOne({ rollNumber }).exec();

  if (!student) {
    return res.json({ message: "Student not found" });
  }

  student.studentName = studentName;
  student.gender = gender;
  student.dob = dob;
  student.school = school;
  student.centre = centre;

  const updatedStudent = await student.save();
  res.json({ message: `${updatedStudent.studentName} updated` });
});

// @desc Delete a particular Student by rollNumber
// @route DELETE/Students/:rollNumber
// @access Private
const deleteStudent = asyncHandler(async (req, res) => {
  const rollNumber = req.params.rollNumber;

  if (!rollNumber) {
    return res.status(400).json({ message: "Roll Number required" });
  }

  const student = await Student.findOne({ rollNumber }).exec();
  if (!student) {
    return res.status(400).json({ message: "Student not found" });
  }

  if (student.sponsorshipStatus) {
    return res
      .status(400)
      .json({ message: "First cancel sponsorship of child" });
  }

  const result = await student.deleteOne();
  res.json({ message: "Student Deleted" });
});

module.exports = {
  addNewStudent,
  getAllStudents,
  getStudentByRoll,
  updateStudent,
  deleteStudent,
};
