const mongoose = require('mongoose');

let UserLoginSchema = new mongoose.Schema({
    UserName : String,
    Password : String,
    isAdmin : Boolean,
});

module.exports = mongoose.model('userslogin', UserLoginSchema);







