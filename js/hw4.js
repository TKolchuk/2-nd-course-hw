//1
// let i = 0;
// while (i < 2) {
//   console.log(`Привет`);
//   i++;
// }

//2
// for (i = 1; i <= 5; i++) {
//   console.log(`${i}`);
// }

//3
// let i = 1;
// while (i <= 22) {
//   if (i < 7) {
//     i++;
//     continue;
//   } else {
//     console.log(i);
//     i++;
//   } 
// }

// ИЛИ

// for (i = 7; i <= 22; i++){
//   console.log(i);
// }


//4
// const obj= {
//   Коля : '200',
//   Вася : '300',
//   Петя : '400',
// }
// for (let key in obj) {
//    console.log(`${key} — зарплата ${obj[key]} долларов.`);
// }


//5
// let n = 1000;
// let num = 0;
// let res = 0;
// while(n > 50) {
//   num++;
//   n /= 2;
// }
// console.log(`result = ${n}, num = ${num} `);

//6
let number = 6;
for (i = 0; i <= 31; i++){
  if( i % 7 === number){
    console.log(`Сегодня пятница, ${i}-e число. Необходимо подготовить отчет.`);
  };
}