const { bookRoom } = require('../controllers/rooms');

module.exports = router => {
  router.post('/bookRoom/:id/:userID', bookRoom);  
  return router;
};