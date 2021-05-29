const User = require('../models/usersModels')

const getAllUsers = function()
{  
    return new Promise((resolve,reject) =>
        {
           User.find({}, function(err,userslogins)
           {
               if(err)
               {
                   reject(err)
               }
               else
               {
                   resolve(userslogins)
               }

           })
        })
}

const checkIfUserExist = function(obj)
{
    return new Promise((resolve,reject) => 
    {
        User.findOne({UserName : obj}, function(err,userexist)
        {     
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(userexist)
            }
        })
    })
}

module.exports = {getAllUsers, checkIfUserExist}