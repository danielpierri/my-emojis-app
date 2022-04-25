let myEmojis = ["🙈", "🙉", "🙊"]
const noEmoji = document.getElementById("no-emoji")

function renderEmojis() {
  const emojiContainer = document.getElementById("emoji-container")
  emojiContainer.innerHTML = ""

  for (let i = 0; i < myEmojis.length; i++) {
    const emoji = document.createElement("span")
    emoji.textContent = myEmojis[i]
    emojiContainer.append(emoji)
  }
}

renderEmojis()


const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", () => {
  const emojiInput = document.getElementById("emoji-input")
  noEmoji.style.display = "block"
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value)
    emojiInput.value = ""
    noEmoji.style.display = "none"
    renderEmojis()
  }
})

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", () => {
  const emojiInput = document.getElementById("emoji-input")
  noEmoji.style.display = "block"
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value)
    emojiInput.value = ""
    noEmoji.style.display = "none"
    renderEmojis()
  }
})

const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", () => {
  myEmojis.pop()
  renderEmojis()
})

const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener("click", () => {
  myEmojis.shift()
  renderEmojis()
})

const removeAllBtn = document.getElementById("remove-all-btn")
removeAllBtn.addEventListener("click", () => {
  const emojiContainer = document.getElementById("emoji-container")
  emojiContainer.innerHTML = ""
  myEmojis = [""]
  noEmoji.style.display = "block"
})