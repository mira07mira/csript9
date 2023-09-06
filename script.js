// let exx = +prompt('Введите количество примеров')
// let min = +prompt('Введите минимальное число')
// let max = +prompt('Введите максимальное число')

// function rand(min, max) {
//     return Math.floor(Math.random() * (max + 1 - min) + min)
// }
// console.log(rand(min, max));

// for (let i = 0; i < exx; i++) {
//     let randNum1 = rand(min,max)
//     let randNum2 = rand(min,max)
    
//     let alphabet = "+-*/";
//     let randomIndex = Math.floor(Math.random() * alphabet.length);
//     let randomLetter = alphabet[randomIndex];
   
//     let pr =+prompt(randNum1 + randomLetter + randNum2)
    
//     let answer = (randNum1 + randomLetter + randNum2) == pr ? 'Молодец' : 'Ошибка'
    
//     let trueAnswer = randNum1 + randomLetter + randNum2
    
   
//     alert(randNum1 + randomLetter + randNum2 + ' = ' + trueAnswer + ' . ' + ' Ваш ответ: ' + pr + ' ! ' + answer)
// }

$(function() {
    function str_rand() {
        var result       = '';
        var words        = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        var max_position = words.length - 1;
            for( i = 0; i < 5; ++i ) {
                position = Math.floor ( Math.random() * max_position );
                result = result + words.substring(position, position + 1);
            }
     }
})