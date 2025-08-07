//1
let str1 = 'js';
console.log(str1.toLocaleUpperCase());

//2
function nf(arr, str){
    let res = [];
    arr.forEach((el) => {
        if(el.toLowerCase().startsWith(str.toLowerCase())){
            res.push(el);
        }
    })
    return res;
}
console.log(nf( ['Хлеб Бородинский', 'Молоко Молочник', 'Коровка Молоко', 
'Груша Конференция', 'моЛоко кедровое'], 'молоко'));

//3
let num = 32.58884;
console.log('До меньшего целого:', Math.floor(num));
console.log('До большего целого:', Math.ceil(num));
console.log('До ближайшего целого:', Math.round(num));

//4
console.log('Mинимальное:', Math.min(52, 53, 49, 77, 21, 32));
console.log('Mаксимальное:', Math.max(52, 53, 49, 77, 21, 32));

//5
function randomNum() {
    console.log(Math.floor(Math.random() * 10) + 1);
}
randomNum();

//6
function randomArr(num) {
    let arr = [];
    for(let i = 0; i < num / 2; i++){
        arr.push(Math.floor(Math.random() * num));
    } 
    return arr;
}
console.log(randomArr(10));

//7
function randomRange (start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
console.log(randomRange(7, 17));

//8 
let date = new Date();
console.log(date);

//9
let currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log((futureDate));

//10
function formatDate (date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
    "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    return `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} — это ${days[date.getDay()]}.\nВремя: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
let date10 = new Date;
console.log(formatDate(date10));