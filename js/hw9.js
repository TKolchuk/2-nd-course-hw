//1

const headingEl = document.querySelector(".heading");
const btnHiddenEl = document.querySelector(".btnHidden");

btnHiddenEl.addEventListener('click', () => {
    headingEl.classList.toggle("hiddenHeading")
});

//2

const textEl = document.querySelector(".text");
const btnStyleEl = document.querySelector(".btnStyle");

btnStyleEl.addEventListener('click', () => {
    textEl.style.color = "blue"
});

//3

const newHeadingEl = document.querySelector(".newHeading");
const btnNewHeadingEl = document.querySelector(".btnNewHeading");

btnNewHeadingEl.addEventListener('click', () => {
    newHeadingEl.textContent = 'Привет, мир!'
});
