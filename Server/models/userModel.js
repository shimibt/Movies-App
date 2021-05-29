const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    FirstName : {
        type : String,
        require : true
    },
    LastName : {
        type : String,
        require : true
    },
    Created : {
        type : Date,
        default : Date.now
    },    
    SessionTimeOut : {
        type : Number,
        default : 20
    }
});

module.exports = mongoose.model('user', UserSchema)