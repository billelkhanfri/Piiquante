const express = require('express');
// import routers
const router = express.Router();

// import controllers
const userCtrl = require('../controllers/user');
// router methods using endoints and middlwares as parameters
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;