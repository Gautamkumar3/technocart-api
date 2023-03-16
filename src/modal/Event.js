const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  Event_name: { type: String, required: [true, "Please provide event name."] },
  Country: { type: String, required: [true, "Please provide country name."] },
  State: { type: String, required: [true, "Please provide state name."] },
  City: { type: String, required: [true, "Please provide city name."] },
  Pincode: { type: String, required: [true, "Please provide pincode name."] },
  Event_photo: {
    type: String,
    required: [true, "Please provide image of the event."],
  },
});

const Event = mongoose.model("event", EventSchema);

module.exports = Event;
