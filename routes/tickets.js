const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets')


router.get('/tickets/:id/new', ticketsCtrl.show);
router.post('/tickets/show', ticketsCtrl.createFlightTicket);

module.exports = router;

