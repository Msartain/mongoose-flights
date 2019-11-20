let Flight = require('../models/flight');


module.exports = {
    show
}


function show(req, res){
    console.log('WORKING')
    res.render('tickets/new')
}
