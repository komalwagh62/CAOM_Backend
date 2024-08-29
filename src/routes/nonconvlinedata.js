const express = require('express');
const router = express.Router();
const nonconvlinedataController = require('../controllers/nonconvlinedataController');

router.get('/nonconvlinedata', nonconvlinedataController.getNonConvLineData);

module.exports = router;
