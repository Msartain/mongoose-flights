const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    arrival: {
        type: Date,
        default: Date.now() + (366 * 24 * 60 * 60000)
    }    
});

let flightSchema = new Schema ({
    airline: {
       type: String,
       enum: ['American', 'Southwest', 'United']
    },
    flightNumber: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: Date.now() + (366 * 24 * 60 * 60000)
        },
    destinations: [destinationSchema],
    airport:{
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA'],
        default: 'SAN'
    }
})


module.exports = mongoose.model('Flight', flightSchema);