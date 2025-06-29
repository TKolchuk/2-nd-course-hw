//1
let password = 'пароль';
let userPassword = prompt("Введите пароль") === password ? console.log(`Пароль введен верно`) : console.log(`Пароль введен неправильно`);

//2
let c = 2;
if (c > 0 && c < 10){
    console.log(`Верно`);
}else {
    console.log(`Неверно`);
}

//3
let d = 115;
let e = 117;
if (d > 100 || e > 100){
    console.log(`Верно`);
} else {
    console.log(`Неверно`);
}

//4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
console.log(Number(a) + Number(b));

//5
let monthNumber = 12;
if (monthNumber > 13) {
    console.log(`вы ввели что-то не то`);
} else {
    switch (monthNumber) {
    case 1: 
    case 2:
    case 12:
        console.log(`зима`);
        break;
    case 3: 
    case 4:
    case 5:
        console.log(`весна`);
        break;
    case 6: 
    case 7: 
    case 8:
        console.log(`лето`);
        break;
    case 9: 
    case 10: 
    case 11:
        console.log(`осень`);
        break;
    }
}   


