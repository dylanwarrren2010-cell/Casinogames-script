const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { makeArray } = require('./utils')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/makeArray', makeArray)

const PORT = 8080

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
// Press "P" to open a custom debug popup
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "p") {
    alert("Debug: You pressed P!");
    // You can replace this with any code you want to run
  }
});
