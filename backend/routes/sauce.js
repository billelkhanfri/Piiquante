const express = require('express');

//imprt middlewares
const auth = require('../middleware/auth');

// import Routes
const router = express.Router();



const multer = require('../middleware/multer-config');

// import controllers
const sauceCtrl = require('../controllers/sauce');
// routes and methods have frontend endpoints , middleware and controllers as parametres
router.get('/', auth, sauceCtrl.getAllSauces);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post("/:id/like", auth, sauceCtrl.sauceLikes);

// export routes
module.exports = router;