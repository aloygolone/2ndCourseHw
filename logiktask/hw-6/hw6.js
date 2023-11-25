// Задание 1

const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
	if (numbs[i-1] == 10) break;
	console.log(numbs[i]);
}

// Задание 2

const a = [1, 5, 4, 10, 0, 3];
console.log(a.indexOf(4));

// Задание 3

const c = [1, 3, 5, 10, 20];
console.log(c.join(' '));

// Задание 4

const array = [];
const arr1 = [1, 1, 1];
const arr2 = [1, 1, 1];
const arr3 = [1, 1, 1];
array[0] = arr1;
array[1] = arr2;
array[2] = arr3;
console.log(array);

// Задание 5

const e = [1, 1, 1];
e.push(2);
e.push(2);
e.push(2);
console.log(e);

// Задание 6

const f = [9, 8, 7, 'a', 6, 5];
f.sort();
f.pop();
console.log(f);

// Задание 7

const g = [9, 8, 7, 6, 5];
let userNumber = Number(prompt('Угадайте число'))
if (g.includes(userNumber)) {
    alert(`Угадал`);    
} else {
    alert(`Не угадал`);
}

// Задание 8

let string = 'abcdef';
let arrayString = string.split('');
let revArray = arrayString.reverse();
console.log(revArray.join(''));

// Задание 9

let arrayBig = [
    [1, 2, 3,],
    [4, 5, 6],
];
console.log(arrayBig.flat());

// Задание 10

let arrayNumbs = [1, 4, 7, 3, 4, 6];
for (let i = 0; i+1 < arrayNumbs.length; i++) {
    let sum = arrayNumbs[i] + arrayNumbs[i+1];
    console.log(sum);
}

// Задание 11

let func = () => {
    let userNumbers = (prompt('Введите через пробел числа'));
    let arrayUsNum = userNumbers.split(' ');
    let result = arrayUsNum.map(item => (item **2));
    return result;
}
console.log(func());

// Задание 12

let funcWord = () => {
    let userWords = (prompt('Введите через пробел слова'));
    let arrayWords = userWords.split(' ');
    for (let words of arrayWords) {
        console.log(words.length);
    }
}
funcWord();

// Задание 13

let negative = () => {
    let userNumbers = (prompt('Введите через пробел числа'));
    let arrayUsNum = userNumbers.split(' '); 
    let negres = arrayUsNum.filter(item => item < 0);
    let result = negres.join();
    return result;
}
console.log(negative());