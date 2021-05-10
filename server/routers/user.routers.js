const express = require('express')
const router = express.Router()
var crypto = require('crypto');
const User = require('../models/user.model');
var mailer = require('../controller/mail.js');
var key="password";
var algo='aes256';

const jwt = require("jsonwebtoken");
const jwtkey ="jwt"

const verification = require('../middleware/auth.middleware')

//post api
router.post("/register", (req, res, next) => {

  var cipher = crypto.createCipher(algo,key);
  var encryptted = cipher.update(req.body.password,'utf8','hex')
  +cipher.final('hex')
  console.warn(req.body,encryptted)

  const data = new User({
      username: req.body.username,
      password: encryptted,
      address : req.body.address,
      Mobile : req.body.Mobile
  })
  
  data.save().then((result)=> {
      jwt.sign({result}, jwtkey, {expiresIn: '7d'}, (err, token) => {
          res.json({token})
      })
  }).catch(err=> console.warn(err))
});

router.post("/login", (req, res, next) => {
  User.findOne({username:req.body.username}).then((data)=>{
      var decipher = crypto.createDecipher(algo,key);
      var decryptted = decipher.update(data.password,'hex','utf8')
      +decipher.final('utf8');
      if(decryptted == req.body.password){
          jwt.sign({data}, jwtkey, {expiresIn: '1d'}, (err, token) => {
              res.status(201).json({status: true, token: token})
          })
      }
  }).catch(err=> console.warn(err))
});

//get api 
router.get("/users", verification, (req, res) => {
  User.find().then((data)=>{
      res.status(200).json(data) 
  })
});

router.delete('/deleteUser/:id',(req, res)=> {
  User.deleteOne({_id:req.params.id}).then((result)=>{
      res.status(200).json(result)
  }).catch((err)=>{
      console.log(err)
  })
})

//Chaining rull

router.get('/pancard', (req, res) => {
  res.json({pan : 123})
})

router.get('/income/:pan', (req, res) => {
  res.json({income : 400000})
})

router.get('/search/:name', (req, res) => {
  try{
      var regex = new RegExp(req.params.name, 'i');
      User.find({username: regex}).then((result) => {
          res.status(200).json(result)
      })
  }catch(e) {
      res.status(400).send(e.message)
  }
  
})

module.exports = router