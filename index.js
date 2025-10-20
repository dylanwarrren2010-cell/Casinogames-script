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
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "p") {
    let box = document.getElementById("debugBox");
    if (!box) {
      box = document.createElement("div");
      box.id = "debugBox";
      box.style.position = "fixed";
      box.style.top = "10px";
      box.style.right = "10px";
      box.style.background = "rgba(0,0,0,0.8)";
      box.style.color = "#0f0";
      box.style.padding = "10px";
      box.style.borderRadius = "8px";
      box.innerText = "Debug panel opened!";
      document.body.appendChild(box);
    } else {
      box.remove(); // press P again to close it
    }
  }
});
