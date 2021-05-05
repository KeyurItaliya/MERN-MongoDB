var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var crypto = require('crypto');
const User = require('./models/user.model');
var mailer = require('./controller/mail.js');
require('./models/db');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8090;

// mailer.sendMail();

var key="password";
var algo='aes256';

var jsonParser = bodyParser.json()
//
const jwt = require("jsonwebtoken");
const jwtkey ="jwt"
//
//middleware
app.use(cors())
app.use(express.json());

bodyParser.urlencoded({ extended: true })
var router = express.Router();

// middleware 
function verification(req, res, next){
    
    const bearHeader = req.headers['authorization'];
    if(bearHeader !== 'undefined'){
        req.token=bearHeader;
        jwt.verify(req.token, jwtkey, (err, authData) => {
            if(err){
                res.json({result: { message: "invalid token!"}})
            }else{
                next()
            }
        })
    }else{
        res.status(500).send({"result": "Token is not provided"})
    }
}

//post api
router.post("/register", jsonParser, (req, res, next) => {

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

app.post("/login",jsonParser, (req, res, next) => {
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
app.get("/users", verification, (req, res) => {
    User.find().then((data)=>{
        res.status(200).json(data) 
    })
});

app.delete('/deleteUser/:id',(req, res)=> {
    User.deleteOne({_id:req.params.id}).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        console.log(err)
    })
})

//Chaining rull

app.get('/pancard', (req, res) => {
    res.json({pan : 123})
})

app.get('/income/:pan', (req, res) => {
    res.json({income : 400000})
})

app.get('/search/:name', (req, res) => {
    try{
        var regex = new RegExp(req.params.name, 'i');
        User.find({username: regex}).then((result) => {
            res.status(200).json(result)
        })
    }catch(e) {
        res.status(400).send(e.message)
    }
    
})

app.use("/", router);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
