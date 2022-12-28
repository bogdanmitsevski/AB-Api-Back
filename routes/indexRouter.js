const express = require('express');
const router = express.Router();

router.use('/', require('../routes/deviceRouter'));
router.use('/', require('../routes/experimentRouter'));

module.exports = router;
