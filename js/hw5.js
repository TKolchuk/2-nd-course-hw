//1
function smallerNumber(a, b) {
  let min = a;
  if (b < min) {
    min = b;
  } 
  return min;
}

console.log(smallerNumber(31, 14))

//2
function isEven(a) {
    if (a % 2 === 0) {
        return "Число четное";
    } else {
        return "Число нечетное";
    }
}

console.log(isEven(31));
console.log(isEven(14));

//3
function square1(a) {
    console.log(a**2);
}

function square2(a) {
    return a**2;
}

square1(5);

let res = square2(3);
console.log(res);

//4
function age() {
    let userAge = prompt(" Введите ваш возраст");
    if (userAge < 0) {
        alert(`Вы ввели неправильное значение`);
    }else if (userAge <= 12) {
        alert(`Привет, друг!`);
    } else {
        alert(`Добро пожаловать!`);
    }
}

age();

//5
function isNumber(a, b) {
    if( isNaN(a) || isNaN(b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return a * b;
    }
}

console.log(isNumber( 4, 8));

//6
function cube() {
    let num = prompt("Введите число");
    if ( isNaN(num) === false) {
        return `${num} в кубе равняется ${num ** 3}`;
    } else {
        return `Переданный параметр не является числом`;
    }
}

console.log(cube());


//7

const circle1 = {
    radius: 8,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

const circle2 = {
    radius: 5,
    getArea() {
        return Math.PI * this.radius ** 2;
    },
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

console.log(circle1.getArea());
