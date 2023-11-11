// Задание 1

let less = (a, b) => {
    if (a < b) {
        console.log(a);        
    } else {
        console.log(b);
    }
}

less(8, 4);
less(6, 6);

// Задание 2

let parity = () => {
    let userNumber = Number(prompt('Введите любое число'));
    if (userNumber % 2 == 0 && userNumber !== 0) {
        console.log('Число четное');
    } else if (userNumber % 2 != 0 && userNumber !== 0) {
        console.log('Число нечетное');
    } else {
        console.log('Вы ввели 0');
    }
}

parity();

// Задание 3

let square = () => {
    let s = Number(prompt('Введите число'));
    console.log(s**2);
}
square();

let square2 = () => {
    let s = Number(prompt('Введите число'));
    let result = s**2;
    return result;
}
let res = square2();
console.log(res);

// Задание 4

let hello = () => {
    let a;
    do {
       a = Number(prompt('Сколько Вам лет?'));
    } while (a < 0);
    if (a >= 0 && a <= 12) {
        console.log('Привет, друг!');
        alert('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
        alert('Добро пожаловать!');
    }
}    
hello();

// Задание 5

let mult = () => {
    let a = (prompt('Введите первое число'));
    let b = (prompt('Введите второе число'));
    let multi = a * b;
    if (isNaN(a) || isNaN(b)) {
        return alert('Одно или оба значения не являются числом');
    } else {
        return console.log(multi);
    }
}
mult();

// Задание 6

let cube = () => {
    let userNumber = (prompt('Введите число'));
    let cubeResult = userNumber**3;
    if (isNaN(userNumber)) {
        return alert('Переданный параметр не является числом');
    } else {
        return alert(`${userNumber} в кубе равняется ${cubeResult}`);
    }
}
cube();

// Задание 7

let getArea = function() {
    let square = this.radius ** 2 * Math.PI;
    return console.log(`Площадь круга с радиусом r=${this.radius} равна ${square}`)
}
let getPerimeter = function() {
    let perimeter = this.radius * 2 * Math.PI;
    return console.log(`Периметр круга с радиусом r=${this.radius} равен ${perimeter}`)
}

let circle1 = {
    radius: Number(prompt('Введите радиус 1 круга')),
    Area: getArea,
    Perimeter: getPerimeter,
}
let circle2 = {
    radius: Number(prompt('Введите радиус 2 круга')),
    Area: getArea,
    Perimeter: getPerimeter,
}

circle1.Area();
circle1.Perimeter();
circle2.Area();
circle2.Perimeter();

// Задание 8

let season = () => {
    let userNumber = Number(prompt('Введите номер месяца'));
    let userNaN;
    if (userNumber >=1 || userNumber <= 12) {
        if (userNumber === 1 || userNumber === 2 || userNumber === 12) {
            return console.log(`Зима`)            
        } else if (userNumber === 3 || userNumber === 4 || userNumber === 5) {
            return console.log(`Весна`)
        } else if (userNumber === 6 || userNumber === 7 || userNumber === 8) {
            return console.log(`Лето`)
        } else {
            return console.log(`Осень`)
        }
    } else {
        do {
            userNaN = Number(prompt('Введите номер месяца (нужно ввести от 1 до 12'))
        } while (userNaN < 1 || userNaN > 12 || isNaN(userNaN));
        if (userNaN >=1 || userNaN <= 12) {
            if (userNaN === 1 || userNaN === 2 || userNaN === 12) {
                return console.log(`Зима`)            
            } else if (userNaN === 3 || userNaN === 4 || userNaN === 5) {
                return console.log(`Весна`)
            } else if (userNaN === 6 || userNaN === 7 || userNaN === 8) {
                return console.log(`Лето`)
            } else {
                return console.log(`Осень`)
            }
        }    
    }   
}

season();