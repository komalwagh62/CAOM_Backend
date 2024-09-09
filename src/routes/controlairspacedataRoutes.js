const express = require('express');
const router = express.Router();
const controlairspaceController = require('../controllers/controlairspaceController');

router.get('/controlairspace', controlairspaceController.getControlAirspaceData);

module.exports = router;
