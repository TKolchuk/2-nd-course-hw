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