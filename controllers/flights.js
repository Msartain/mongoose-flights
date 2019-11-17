let Flight = require('../models/flight');

module.exports = {
    index,
    create,
    new: newFlight
}

function index(req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights});
    });
}

function create(req, res){
    console.log("WORKING1");
    let flight = new Flight(req.body);
    flight.save(function(err){
        console.log(flight);
        if (err) return res.render('flights/new');
        console.log("test")
        res.redirect('/flights');
    });
}

function newFlight(req, res) {
    res.render('flights/new');
  }