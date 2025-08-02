//1
const arr1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr1.length; i++){
    console.log(arr1[i]);
    if (arr1[i] === 10){
        break;
    }
}

//2
const arr2 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr2.length; i++){
    if (arr2[i] === 4){
        console.log(i);
        break;
    }
}

//3
const arr3 = [1, 3, 5, 10, 20];
console.log(arr3.join(` `));

//4
const arr4 = [];

for(let i = 0; i < 3; i++){
    const arrIn = [];
    for(let j = 0; j < 3; j++){
        arrIn.push(1);
    }
    arr4.push(arrIn);
}

console.log(arr4);

//5
const arr5 = [1, 1, 1];
for(let i = 0; i < 3; i++){
    arr5.push(2);
}
console.log(arr5);

//6
const arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
arr6.pop();
console.log(arr6);

//7
const arr7 = [9, 8, 7, 6, 5];
let num = Number(prompt(`Угадайте число`));
if(arr7.includes(num)){
    alert(`Угадал`);
}else{
    alert(`Не угадал`);
}

//8
let str = 'abcdef';
let arr8 = str.split("");
arr8.reverse();
let res = arr8.join("");
console.log(res);

//9
const arr9 = [[1, 2, 3],[4, 5, 6]];
const newArr = [...arr9[0], ...arr9[1]]
console.log(newArr);

//10
const arr10 = [];
for(let i = 0; i < 10; i ++){
    arr10.push(Math.floor(Math.random() * 10) + 1);
}
console.log(arr10);
for(let i = 0; i < arr10.length - 1; i++){
    console.log(arr10[i] + arr10[i + 1]);
}

//11
function square(num) {
    let squareNum = num.map(num => num * num);
    return squareNum;
}
console.log( square([1, 2, 3, 4]));

//12
function length(str){
    const res = [];
    for(let i = 0; i < str.length; i++){
        res.push(str[i].length)
    }
    return res;
}
console.log( length(['es', 'afcf', 'ddjhcf']));

//13
function negative(num) {
    negative = num.filter(num => num < 0);
    return negative; 
}
console.log(negative([-9, 9, 5, 0, -7]));

//14
const arr14 = [];
for(let i = 0; i < 10; i ++){
    arr14.push(Math.floor(Math.random() * 11));
}
console.log(arr14);
const evenNum  = arr14.filter(num => num % 2 === 0);
console.log(evenNum);

//15
const arr15 = [];
for(let i = 0; i < 6; i ++){
    arr15.push(Math.floor(Math.random() * 10) + 1);
}
console.log(arr15)

const sum = arr15.reduce((num1, num2) => num1 + num2);
let res15 = sum / arr15.length;
console.log(res15);
