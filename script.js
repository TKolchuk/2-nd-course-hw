function playRandom() {
    let number = Math.floor(Math.random() * (100 - 1 + 1) + 1); 
    console.log(number);
    let userNumber = Number(prompt('Угадайте какое число загадал компьютер'));
    do {
        if (userNumber == number){
            alert("Поздравляю! Вы угадали!!!");
            break;
        } else if(confirm("Вы не угадали. Будете угадывать дальше?")) {
           if(userNumber < number){
                userNumber = prompt('Подсказка: загаданное число больше');  
            } else if (userNumber > number) {
                userNumber = prompt('Подсказка: загаданное число меньше');

            } else {
                alert("Поздравляю! Вы угадали!!!");
                break;
            }             
        } else {
            break;
        }        
    } while (userNumber !== number);
}

function playMath() {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[Math.floor(Math.random() * 4)];
    let num1 = Math.floor(Math.random() * 20) + 1;
    let num2 = Math.floor(Math.random() * 20) + 1;

    let answer;
    switch(operation) {
        case '+': answer = num1 + num2; break;
        case '-': answer = num1 - num2; break;
        case '*': answer = num1 * num2; break;
        case '/': answer = Math.floor(num1 / num2); break;
    }

    let userAnswer  = Number(prompt(`Решите пример (если ответ - дробное число, введите только целую часть). \n ${num1} ${operation} ${num2}`));
    
    do{
        if( userAnswer === answer){
         alert(`Верно`);
        } else{
            if(confirm(`Не верно. Попробовать ещё раз?`)){
                userAnswer  = Number(prompt(`${num1} ${operation} ${num2}`));
            }else{
                break;
            }
            
        }
    }while(answer !== userAnswer);
        
        
   
    
}