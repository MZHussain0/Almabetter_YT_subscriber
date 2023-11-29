const express = require("express");

// Creating a new router instance
const router = express.Router();
const {
  getSubscribers,
  getSubsNames,
  getSubscriber,
} = require("../controllers/subscribersController");

/**
 * Route: /
 * Method: GET
 * Description: Get all subscribers
 */
router.route("/").get(getSubscribers);

/**
 * Route: /names
 * Method: GET
 * Description: Get the names of all subscribers
 */
router.route("/names").get(getSubsNames);

/**
 * Route: /:id
 * Method: GET
 * Description: Get a specific subscriber by ID
 */
router.route("/:id").get(getSubscriber);

module.exports = router;
