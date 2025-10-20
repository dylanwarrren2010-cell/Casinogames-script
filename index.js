// Browser version of makeArray function (replaces server-side logic)
function makeArray(length = 5, max = 100) {
  const arr = []
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * max))
  }
  return arr
}

// Example: simulate a game action
function runGame() {
  const arr = makeArray(5, 50)
  console.log("Game array:", arr)
  const statusEl = document.getElementById("status")
  statusEl.textContent = "Game loaded! Check the console (F12) to see the game array."
}

// Run the game after page loads
window.addEventListener("DOMContentLoaded", () => {
  runGame()
})

// Debug panel: press "P" to toggle
document.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "p") {
    let box = document.getElementById("debugBox")
    if (!box) {
      box = document.createElement("div")
      box.id = "debugBox"
      box.style.position = "fixed"
      box.style.top = "10px"
      box.style.right = "10px"
      box.style.background = "rgba(0,0,0,0.8)"
      box.style.color = "#0f0"
      box.style.padding = "10px"
      box.style.borderRadius = "8px"
      box.style.fontFamily = "monospace"
      box.style.zIndex = 9999
      box.innerText = "Debug panel opened!\nPress P to close."
      document.body.appendChild(box)
    } else {
      box.remove()
    }
  }
})

