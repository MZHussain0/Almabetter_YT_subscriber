const express = require("express");
const router = express.Router();
const {
  getSubscribers,
  getSubsNames,
  getSubscriber,
} = require("../controllers/subscribersController");

router.route("/").get(getSubscribers);
router.route("/names").get(getSubsNames);
router.route("/:id").get(getSubscriber);

module.exports = router;
