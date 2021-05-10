
const promis = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("promise pending Async")
    resolve("resolved")
    // reject(new Error('messages'))
  })
})

promis
  .then((result) => { console.log("Result ", result) })
  .catch((error) => { console.log(error.messages) })

module.exports = promis