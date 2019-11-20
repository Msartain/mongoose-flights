let Flight = require('../models/flight');
let Ticket = require('../models/ticket');


module.exports = {
    show,
    createFlightTicket
}


function createFlightTicket(req, res) {
    Flight.findById(req.body.flightId, function(err, flight) {
        let obj = { 
            price: req.body.price,
            seat: req.body.seat,
            flight: [req.body.flightId]
        }
        let ticket = new Ticket(obj);
        // console.log(ticket);
        ticket.save(function(err) {
            if(err)console.log(err)  
            res.redirect(`/flights/${flight._id}`);
          });   
 })
}
  

function show(req, res){
    // console.log('WORKING' + req.params.id)
    res.render('tickets/new', {
        id: req.params.id
    })
}