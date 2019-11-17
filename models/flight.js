let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let flightSchema = new Schema ({
    airline: {
       type: String,
       enum: ['american', 'southwest', 'united']
    },
    flightNumber: {
        type: Number,
    },
    departs: {
        type: Date,
    }
});

module.exports = mongoose.model('Flight', flightSchema);