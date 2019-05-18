const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const Schema = mongoose.Schema

const Test = new Schema({
    name: String,
    age: {
        type: Number,
        required: true,
        default: 0
    },
    message: String
})

Test.plugin(timestamp)

module.exports = mongoose.model('Test', Test)
