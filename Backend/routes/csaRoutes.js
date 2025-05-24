const express = require("express");
const router = express.Router();
const csaController = require("../controllers/csaController.js");

router.route("/").get(csaController.getVerifiedDonations);
router.route("/action").get(csaController.getChildTobeAlloted);
router.route("/allot").patch(csaController.allotChild);

module.exports = router;
