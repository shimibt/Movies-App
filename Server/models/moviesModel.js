const mongoose = require('mongoose');

let MoviesSchema = new mongoose.Schema({
    Name : String,
    Geners : Array,
    Image : String,
    Premiered : Date
});

module.exports = mongoose.model('movie', MoviesSchema);