//20 минут
/* Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок. */

function roundNumber(number) {
    let reminder = number % 5;

    if (reminder >= 2.5) {
        return (number - reminder + 5);
    } else if (reminder < 2.5) {
        return (number - reminder);
    } else {
        return number;
    }
}
console.log(roundNumber(27));
console.log(roundNumber(27.8));
console.log(roundNumber(41.7));