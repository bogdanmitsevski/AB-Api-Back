const express = require('express');
const router = express.Router();
const DeviceController = require('../controllers/deviceController');

router.post('/send', DeviceController.sendData);



module.exports = router;
