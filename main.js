const images = document.querySelectorAll(".js-plus-btn")
const answers = document.querySelectorAll(".answer")
const titles = document.querySelectorAll(".title")
console.log(titles)
const minusBtn = document.querySelector(".js-minus-btn")
const details = document.querySelector(".js-details")
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

minusBtn.addEventListener("click", () => {
  details.classList.toggle("answer")
})

let index = 0
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
