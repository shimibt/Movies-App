const mongoose = require('mongoose');

let MembersSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    City : String
});

module.exports = mongoose.model('member', MembersSchema);