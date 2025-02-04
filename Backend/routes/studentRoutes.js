const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentControllers.js')
router.route('/')
    .post(studentController.AddNewStudent)
    .get(studentController.getallStudents)
    .patch(studentController.UpdateStudent);
    
    router.route('/:Roll_Number')
    .get(studentController.getStudentbyRoll)
    .delete(studentController.DeleteStudent);
    
module.exports = router

