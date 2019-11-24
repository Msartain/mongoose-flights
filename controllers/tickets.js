let Flight = require('../models/flight');
let Ticket = require('../models/ticket');


module.exports = {
    show,
    createFlightTicket,
    delete: deleteTicket
}

function deleteTicket(req, res){
    let ticketId = req.params.id;
    let flightId = req.params.flight;
    Ticket.deleteOne({_id: ticketId}, function(err){})
    res.redirect(`/flights/${flightId}`);
}


function createFlightTicket(req, res) {
    Flight.findById(req.body.flightId, function(err, flight) {
        let obj = { 
            price: req.body.price,
            seat: req.body.seat,
            flight: [req.body.flightId]
        }
        let ticket = new Ticket(obj);
        ticket.save(function(err) {
            if(err)console.log(err)  
            res.redirect(`/flights/${flight._id}`);
          });   
 })
}
  

function show(req, res){
    console.log(req.params.id);
    res.render('tickets/new', {
        id: req.params.id
    })
}

