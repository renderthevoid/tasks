//29 минут
//1 компьютер 2 компьютера 5 компьютеров 10

function wordVariants(num) {
    let timeMod100 = num % 100;
    let timeMod10 = num % 10;
    let word = "";

    if(timeMod10 == 1 && num < 10) {
        word = `${num} компьютер`;
    }
    else if (timeMod10 >= 2 && timeMod10 <= 4 && num < 10) {
        word = `${num} компьютера`;
    }
    else if (timeMod100 >= 11 && timeMod100 <= 14 && num > 10) {
        word = `${num} компьютеров`;
    }
    else {
        word = `${num} компьютеров`;
    }
    return word;
} 

console.log(wordVariants(28));
console.log(wordVariants(14));
console.log(wordVariants(1));
console.log(wordVariants(4));