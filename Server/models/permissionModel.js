const mongoose = require('mongoose');

let PermissionsSchema = new mongoose.Schema({
    Permission : [
        {
            ViewSubscriptions : String,
     
            CreatedSubscriptions : String,
       
            DeleteSubscriptions : String,
       
            ViewMovies : String,
        
            CreateMovie : String,
      
            DeleteMovies : String
        }
    ]
});

module.exports = mongoose.model('Permission', PermissionsSchema);