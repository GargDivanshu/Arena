const mongoose = require('mongoose');
const displaySchema = new mongoose.Schema({
    teamA: {
        type: String,
        required: true,
    }, 
    teamB: {
        type: String,
        required: true,
    }, 
    sportsName: {
        type: String,
        required: true,
    },
    message: {
        type: String,
    },
})

module.exports = mongoose.model('Display', displaySchema);