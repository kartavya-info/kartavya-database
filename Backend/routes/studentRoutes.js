const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentControllers.js");
const multer = require("multer");
const azure = require("../azureStorage.js");
const catchAsync = require("../Utils/catchAsync.js");
const path = require("path");
const crypto = require("crypto");
const asyncHandler = require('express-async-handler')

const sanitizeFilename = (originalname) => {
  const ext = path.extname(originalname).toLowerCase(); // Get file extension
  const timestamp = Date.now(); // Current time in milliseconds
  const uniqueId = crypto.randomBytes(8).toString("hex"); // Generate a safe, random 16-character string
  return `profile_photo_${timestamp}_${uniqueId}${ext}`;
};

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    file.originalname = sanitizeFilename(file.originalname);
    cb(null, true);
  },
});

router
  .route("/")
  .get(studentController.getAllStudents)
  .post(
    upload.single("profilePicture"), // Handle file upload
    catchAsync(azure.uploadToAzureBlob), // Upload file to Azure Blob Storage
    catchAsync(async (req, res) => {
      const profilePictureUrl = req.fileUrl ? req.fileUrl : ""; // Get the uploaded file's URL
      await studentController.addNewStudent(req, res, profilePictureUrl); // Pass URL to the controller
    })
  )
  .patch(studentController.updateStudent);

router
  .route("/:rollNumber")
  .get(studentController.getStudentByRoll)
  .put(
    upload.single("Results"), // Handle file upload
    asyncHandler(azure.uploadToAzureBlob), // Upload file to Azure Blob Storage
    asyncHandler(async (req, res) => {
      const profilePictureUrl = req.fileUrl ? req.fileUrl : ""; // Get the uploaded file's URL
      await studentController.updateResult(req, res, profilePictureUrl); // Pass URL to the controller
    })
  .delete(studentController.deleteStudent);

module.exports = router;
