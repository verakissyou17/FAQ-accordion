const images = document.querySelectorAll(".js-plus-btn")
const answers = document.querySelectorAll(".answer")
const titles = document.querySelectorAll(".title")
const firstTitle = document.querySelector(".first--title")
let isVisible = true
images.forEach((image, index) => {
  image.addEventListener("click", () => {
    answers[index].classList.toggle("visible")
    isVisible = !isVisible
    if (isVisible) {
      image.src = "./images/icon-plus.svg"
    } else {
      image.src = "./images/icon-minus.svg"
    }
  })
})

let index = 0

document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      index = (index + 1) % titles.length
      titles[index].focus({preventScroll: true})
      answers[index].classList.add("visible")
    }
    if (e.key === "ArrowUp") {
      answers[index].classList.remove("visible")
    }
  })
})
