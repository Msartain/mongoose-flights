let Flight = require('../models/flight');


module.exports = {
    show
}


function show(req, res){
    console.log('carson')
    res.render('flights/ticket')
}
