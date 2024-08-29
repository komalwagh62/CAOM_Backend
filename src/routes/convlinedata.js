const express = require('express');
const router = express.Router();
const convlinedataController = require('../controllers/convlinedataController');

router.get('/convlinedata', convlinedataController.getConvLineData);

module.exports = router;
