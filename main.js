const images = document.querySelectorAll(".js-plus-btn")
const answers = document.querySelectorAll(".answer")
const titles = document.querySelectorAll(".title")
console.log(titles)
const minusBtn = document.querySelector(".js-minus-btn")
const details = document.querySelector(".js-details")
const firstTitle = document.querySelector(".first--title")
images.forEach((image, index) => {
  image.addEventListener("click", () => {
    answers[index].classList.toggle("visible")
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
