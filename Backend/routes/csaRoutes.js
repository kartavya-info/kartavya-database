const express = require("express");
const router = express.Router();
const csaController = require("../controllers/csaController.js");

// router.route("/").get(csaController.getVerifiedDonations);

router.route("/:sponsorId").get(csaController.allotChild);

module.exports = router;
