const express = require('express');
const router = express.Router();
const waypointdataController = require('../controllers/waypointdataController');

router.get('/waypointdata', waypointdataController.getWaypointData);

module.exports = router;
