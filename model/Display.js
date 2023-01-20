const mongoose = require('mongoose');
const displaySchema = new mongoose.Schema({
    teamA: {
        type: String,
    }, 
    teamB: {
        type: String,
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