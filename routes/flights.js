var express = require('express');
var router = express.Router();
let flightsCtrl = require('../controllers/flights')

// GET /flights 
router.get('/', flightsCtrl.index);

// Get /flights/new
router.get('/new', flightsCtrl.new);

// POST /flights
router.post('/', flightsCtrl.create);


module.exports = router;


