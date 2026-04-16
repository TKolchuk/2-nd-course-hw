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

//4

const descriptions = document.querySelectorAll('.description4');
descriptions.forEach(element => {
    element.textContent = 'Измененный текст';
});


//5

const descriptEl = document.querySelectorAll('.description');

descriptEl.forEach(element => {
    element.textContent = 'Новый текст';
});

//6

const btnAdd = document.getElementById('btnAdd');
        
btnAdd.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    document.body.appendChild(newParagraph);
});

//7

const btnDel = document.getElementById('btnDel');

btnDel.addEventListener('click', function() {
    const targetElement = document.querySelector('.description7');
    targetElement.remove();
   
});
