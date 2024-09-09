const express = require('express');
const router = express.Router();
const getaerodromeObstacle = require('../controllers/aerodromeObstacleController');

router.get('/aerodromeobstacle', getaerodromeObstacle.getAerodromeObstacle);

module.exports = router;
