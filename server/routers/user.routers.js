const express = require("express");
const router = express.Router();
var crypto = require("crypto");
const User = require("../models/user.model");

const { orderController } = require('../controller/order.controller')
var mailer = require("../controller/mail.js");
var key = "password";
var algo = "aes256";

const jwt = require("jsonwebtoken");
const jwtkey = "jwt";
const Queue = require('bull');

const verification = require("../middleware/auth.middleware");

//post api
router.post("/register", async (req, res, next) => {
  try {
    let user = await User.findOne({ username: req.body.username });
    if (user) {
      throw new Error("User name already registered.");
    }

    var cipher = crypto.createCipher(algo, key);
    var encryptted =
      cipher.update(req.body.password, "utf8", "hex") + cipher.final("hex");
    console.warn(req.body, encryptted);

    const data = new User({
      username: req.body.username,
      password: encryptted,
      address: req.body.address,
      Mobile: req.body.Mobile,
    });

    data
      .save()
      .then((result) => {
        jwt.sign({ result }, jwtkey, { expiresIn: "1d" }, (err, token) => {
          res.json({ token });
        });
      })
      .catch((err) => console.warn(err));
  } catch (error) {
    console.log(error);
    res.json({ message: error.message });
  }
});

router.post("/login", (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then((data) => {
      var decipher = crypto.createDecipher(algo, key);
      var decryptted =
        decipher.update(data.password, "hex", "utf8") + decipher.final("utf8");
      if (decryptted == req.body.password) {
        jwt.sign({ data }, jwtkey, { expiresIn: "1d" }, (err, token) => {
          res.status(201).json({ status: true, token: token });
        });
      }
    })
    .catch((err) => console.warn(err));
});

//get api
router.get("/users", verification, (req, res) => {
  User.find().then((data) => {
    res.status(200).json(data);
  });
});

router.delete("/deleteUser/:id", (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});


const test = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {  
    for(var i = 0 ; i< 50000; i++){
      console.log("hello", i)
    }
    }, [1000])
    resolve({ suucees : "hello" })
  })
  
}

const test1 = () => {
    for(var i = 0 ; i< 500; i++){
      console.log("hello", i)
      return { suucees : "hello" }
    }
}

let REDIS_URL = 'redis://127.0.0.1:6379';

let workQueue = new Queue('work', REDIS_URL);

router.post("/backgraounproccess",async (req, res) => {
  let job = await test()
  res.json({ id: job });
//   try{
//   const myFirstQueue = new Queue('my-first-queue');
//   let a = myFirstQueue.process(async (job) => {
//     job.done()
//   });
//   res.status(200).send({ data: a })
// }catch(error){
//   res.send(error)
// }

})

router.post('/notify', (req, res) => {
  console.log(req);
  res.status(200).json({ message: "suuceess" })
})

//orders

router.post("/orders", orderController);

//Chaining rull

router.get("/pancard", (req, res) => {
  res.json({ pan: 123 });
});

router.get("/income/:pan", (req, res) => {
  res.json({ income: 400000 });
});

router.get("/search/:name", (req, res) => {
  try {
    var regex = new RegExp(req.params.name, "i");
    User.find({ username: regex }).then((result) => {
      res.status(200).json(result);
    });
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = router;
