const express = require('express');
const router = express.Router();
const navaiddataController = require('../controllers/navaiddataController');

router.get('/navaiddata', navaiddataController.getNavaidData);

module.exports = router;
