const express = require('express');
const router = express.Router();
const heroeController = require('../controllers/heroeController');

router.get('/', heroeController.index);
router.get('/detalle/:id', heroeController.show);
router.get('/bio/id/:id/:ok?', heroeController.showResenia);
router.get('/creditos', heroeController.showCredits);


module.exports = router;
