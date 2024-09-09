const express = require('express');
const router = express.Router();
const restrictedairspaceController = require('../controllers/restrictedAirspaceController');

router.get('/restrictedairspace', restrictedairspaceController.getRestrictedAirspaceData);

module.exports = router;
