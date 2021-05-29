var express = require('express');
var router = express.Router();
const UserBL = require('../BL/usersLoginBL');
const User = require('../models/usersModels');
const NewUser = require('../models/userModel')

/* GET users listing. */
router.post('/', async (req, res, next) => {

  let obj = req.body.name;
  let status =await UserBL.checkIfUserExist(obj);
  res.json(status);
  });


  router.post('/createAccount', async (req,res) => {
    const obj = new User({
      UserName : req.body.name,
      Password : req.body.password
    });
    
   try {
    const savedUser = await obj.save()
    res.json(savedUser);
   } catch (err) {
     res.json({ massage: err})
   }
  });

  router.route('/users').
  get(function(req,resp)
  {
      User.find({}, function(err,pers)
      {
          if(err)
          {
              return resp.send(err)
          }
          return resp.json(pers)
     
      })   
      console.log(resp)    
  });

  router.post('/adduser', async (req,res) => {
    const newUser = new NewUser({
      FirstName : req.body.FirstName,
      LastName : req.body.LastName,   
    });
    console.log(req.body)
   try {
    const savedNewUser = await newUser.save()
    res.json(savedNewUser);
   } catch (err) {
     res.json({ massage: err})
   }
  });





module.exports = router;
