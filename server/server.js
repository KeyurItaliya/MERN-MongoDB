var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 8090;

//db
require('./models/db');

//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const userRouter = require('./routers/user.routers')
const courses = require('./routers/courses.routers')

app.use("/api/user", userRouter);
app.use("/api/courses", courses);

// console.log(process.env.NODE_ENV)
console.log(app.get('env'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});