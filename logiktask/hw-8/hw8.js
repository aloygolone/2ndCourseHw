// Задача 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

people.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
    }
    if (a.age < b.age) {
        return -1;
    }
    return 0;
})

console.log(people);

// Задание 2

function isPositive(num) {
    return num > 0;
}
function isMale(item) {
    return item.gender === 'male';
}
function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;    
}
    
console.log(filter([3, -4, 1, 9], isPositive));
    
const people2 = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];
    
console.log(filter(people2, isMale));

// Задание 3

let currentDate = setInterval(() => console.log(new Date()), 1000 * 3);
setTimeout(() => { clearInterval(currentDate); console.log('30 секунд прошло'); }, 1000 * 30);

// Задание 4

function delayForSecond(callback) {
    return timerId = setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

// Задание 5

// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond2(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond2(() => sayHi('Глеб'));