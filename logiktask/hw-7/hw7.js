// Задание 1

let str = 'js';

console.log(str.toUpperCase());

// Задание 2

function arrayByString(array = [], string) {
    console.log(array.filter(item => item.toLowerCase().startsWith(string.toLowerCase())));
}

arrayByString(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');

arrayByString(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');

arrayByString(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');

// Задание 3

const a = 32.58884

console.log(Math.floor(a));

console.log(Math.ceil(a));

console.log(Math.round(a));

// Задание 4

let numbers = [52, 53, 49, 77, 21, 32];

console.log(Math.max(...numbers));

console.log(Math.min(...numbers));

// Задание 5

let getRandom = (minValue, maxValue) => {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(getRandom(1, 10));

// Задание 6

let getRandomArrNumbers = (number) => {
    
    let array = [];
    for (let index = 0; index < number / 2; index++) {
        array.push(Math.floor(Math.random() * number));
    }
    
    console.log(array);

};
getRandomArrNumbers(9);

// Задание 7

let randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomBetween(5, 18));

// Задание 8

console.log(new Date());

// Задание 9

let currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

// Задание 10

let formatDate = (date) => {
    let day = [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
    ];

    let month = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ];

    let minutes;

    if (date.getMinutes() >= 10) {
        minutes = date.getMinutes();
    } else {
        minutes = '0' + date.getMinutes();
    }

    let seconds;

    if (date.getSeconds() >= 10) {
        seconds = date.getSeconds();
    } else {
        seconds = '0' + date.getSeconds();
    }

    return `Дата: ${date.getDate()} ${
        month[date.getMonth()]
    } ${date.getFullYear()} - это ${
        day[date.getDay()]
    }\nВремя: ${date.getHours()}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));

