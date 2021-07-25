const express = require('express')
const router = express.Router()
const promiscontroller = require('../controller/user.controller')
const Courses = require('../models/courses.model')

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
  { id: 4, name: "course4" }
]

router.get('/', (req, res) => {
  const pageNumber = 2;
  const pageSize = 5;
  // api/courses?pageNumber=2&pageSize=10

  Courses
    // .find({ isPublished: true })
    // .find({ price: { $in: [ 60, 15 ] } })
    // .find({ name:  /^Ram/})
    .find({ isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    // .or([ { name: "ram" }, { price: 60 } ])
    // .and([ { name: "ram" }, { price: 60 } ])
    .limit(pageSize)
    .sort({ name: 1 })
    // .count()
    // .select({ name: 1, tags: 1, price: 1 })
    .then((result) => {
      res.send(result)
    })
})

//comparison operaters - use for compareing value
  //eq(equal)
  //ne(not equal)
  //gt (greater than)
  //gte (greater than equal)
  //lt(less than)
  //lte (less than equal)
  //in 
  //nin (not in)
//Logiacla query
  //or
  //and
//Regular Expression
  // /pattern/
  //Starts eith : /^Ram/
  //End With : /Ram$/
  //Contains : /.*Ram.*/
  //CaseInSansative: /^Ram/i /Ram$/i

router.post('/', (req, res) => {
  async function createCourse() {
    const course = new Courses({
      name: "jon",
      author: "jonAuthor",
      tags: ['MERN stack'],
      isPublished: true,
      price: 150
    })
    const result = await course.save();
    console.log("result -", result)
    res.status(200).json(result)
  }
  createCourse()
})

router.put('/', (req, res) => {
  //Approach : query first
    //findById(
    //modify its properties
    //Save
  //Approach : update first
    //Update directly
    //optionally: get the updated document
  
})

module.exports = router