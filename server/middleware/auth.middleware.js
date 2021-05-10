const jwt = require("jsonwebtoken");
const jwtkey ="jwt"

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

module.exports = verification