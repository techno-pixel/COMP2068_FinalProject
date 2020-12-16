const rooms = require('../models/rooms');
const Rooms = require('../models/rooms');

exports.bookRoom = (req, res, next) => {
  // consume parameters
  const room = rooms.findById(req.params[0]);
  room.booked = true;
  room.bookedByUserID = req.params[1];
  await room.save();
};