const asyncHandler = require("express-async-handler");
const Subscriber = require("../models/Subscriber");
//@desc GET all subscribers
//@route GET /subscribers
//@access public

const getSubscribers = asyncHandler(async (req, res) => {
  const subscribers = await Subscriber.find().select("-__v");
  res.status(200).json(subscribers);
});

//@desc GET Subscribers names
//@route GET /subscribers/names
//@access public
const getSubsNames = asyncHandler(async (req, res) => {
  const subscribers = await Subscriber.find().select(
    "-_id -subscribedDate -__v"
  );
  res.json(subscribers);
});

//@desc GET all subscriber details
//@route GET /subscribers/:id
//@access public
const getSubscriber = asyncHandler(async (req, res) => {
  const subscriber = await Subscriber.findById(req.params.id).select("-__v");
  if (!subscriber) {
    res.status(404);
    throw new Error("Subscriber not found");
  }
  res.status(200).json(subscriber);
});

module.exports = { getSubscribers, getSubsNames, getSubscriber };
