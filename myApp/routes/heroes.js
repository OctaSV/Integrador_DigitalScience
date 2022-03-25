const express = require('express');
const router = express.Router();
const heroeController = require('../controllers/heroeController');

router.get('/', heroeController.index);
router.get('/detalle/:id?', heroeController.show)


module.exports = router;
