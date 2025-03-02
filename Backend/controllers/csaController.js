const asyncHandler = require("express-async-handler");
const ChildSponsorMap = require("./../models/ChildSponsorMapSchema");
const mongoose = require("mongoose");
const Student = require("./../models/Student");
const User = require("./../models/User");

// @desc Get all Donations
// @route GET/api/allotment/
// @access Private
const getVerifiedDonations = asyncHandler(async (req, res) => {
    const verifiedDonations = await ChildSponsorMap.find({}).lean();
    res.json(verifiedDonations);
});

// @desc Get all Students who need Sponsor allotment
// @route GET/api/allotment/action
// @access Private
const getChildTobeAlloted = asyncHandler(async (req, res) => {
  const sponsorid = req.body.sponsorId;
  const students = await Student.find({
       sponsorshipStatus: true, // Fetch only students not fully sponsored
       $expr: {
            $gt: [ { $multiply: ["$annualFees", { $divide: ["$sponsorshipPercent", 100] }] },
               { $multiply: [{ $size: "$sponsorId" },8000]}
            ]
      },
      sponsorId: { $not: { $in: [sponsorid] } }
  }).lean();

   res.status(200).json({ success: true, data: students });
  //Raj sir will complete this
});

//Transaction Controller
const performCATransaction = async (sponsorId, studentId) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // Fetch the ChildSponsorMap document for the sponsor
    const donationObject = await ChildSponsorMap.findOne({
      user: sponsorId,
    }).session(session);
    if (!donationObject || donationObject.donations.length === 0) {
      throw new Error("No donation record found for the sponsor.");
    }

    const firstDonation = donationObject.donations[0];
    const donationId = firstDonation.donationId;
    const numChild = firstDonation.numChild;

    if (numChild <= 0) {
      throw new Error("Invalid donation record: numChild is already zero.");
    }

    //code to check whether the student is already alloted to the sponsor or not

    // Step 1: Push studentId into the sponsoredStudents attribute of User
    await User.updateOne(
      { _id: sponsorId },
      { $addToSet: { sponsoredStudents: studentId } },
      { session }
    );

    // Step 2: Push sponsorId into the sponsorId attribute of Student
    await Student.updateOne(
      { _id: studentId },
      { $addToSet: { sponsorId: sponsorId } },
      { session }
    );

    // Step 3: Decrease the numChild value in the donations array
    firstDonation.numChild -= 1;

    if (firstDonation.numChild === 0) {
      // Remove the donation if numChild becomes zero
      donationObject.donations = donationObject.donations.filter(
        (donation) => donation.donationId.toString() !== donationId.toString()
      );
    }

    // Save the modified donationObject
    await donationObject.save({ session });

    // Commit the transaction
    await session.commitTransaction();
    console.log("Transaction committed successfully! 👍👍");
  } catch (error) {
    await session.abortTransaction();
    console.error("Transaction failed, rolled back!", error);
  } finally {
    session.endSession();
  }
};

// @desc Allot Student to the Sponsor 
// @route PATCH/api/allotment/allot
// @access Private
const allotChild = asyncHandler(async (req, res) => {
  const sponsorId = req.body.sponsorId;
  const studentId = req.body.studentId;

  try {
    await performCATransaction(sponsorId, studentId);
    res.status(200).json({ message: "Child alloted successfully!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  res.json({ message: "hello developer" });
});

module.exports = {
  getVerifiedDonations,
  getChildTobeAlloted,
  allotChild,
};

// donation_id = 679bbe64100a5ecc13b97481
// sponsor_id = 6797b538702bd44e7da764f4
