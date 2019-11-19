let Flight = require('../models/flight');


module.exports = {
    create
};

function create(req, res){
    console.table(req.body)
    console.log(req.params.id)
    console.log(req.body.arrival instanceof Date)
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body);
        flight.save(function(err, flight) {
            console.log(flight)
            res.redirect(`/flights/${flight._id}`);
        });
    });
};