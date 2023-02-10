//12 минут
/* Написать метод/функцию, который/которая на вход принимает целое число, а на выходе возвращает то, 
является ли число простым (не имеет делителей кроме 1 и самого себя). */

function simpleNumber(number) { 
    if (number < 2) {
        return "Введите другое число";
    }
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return "Число составное";
        } else {
            return "Число простое";
        }
    }
}
console.log(simpleNumber(73));
console.log(simpleNumber(1));
console.log(simpleNumber(4));