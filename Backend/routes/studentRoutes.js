const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentControllers.js");

router
  .route("/")
  .post(studentController.addNewStudent)
  .get(studentController.getAllStudents)
  .patch(studentController.updateStudent);

router
  .route("/:rollNumber")
  .get(studentController.getStudentByRoll)
  .delete(studentController.deleteStudent);

module.exports = router;
