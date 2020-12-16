const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const RoomsSchema = new mongoose.Schema({
  roomName: {
    type: String,
    required: true
  },
  roomNumber: {
    type: Number,
    required: true,
  },
  bookedByUserID: {
    type: String,
    required: true
  },
  booked: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Rooms', RoomsSchema);