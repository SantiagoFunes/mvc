const express = require('express');
const router = express.Router();
const aboutcontroller = require('../controllers/aboutController');

router.get('/', aboutcontroller.about);

module.exports = router;
