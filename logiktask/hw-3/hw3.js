//Задание 1

let password = 'пароль';
let userpswrd = String(prompt('Введите пароль'));
userpswrd === password ? alert("Пароль введен верно") : alert("Пароль введен неверно");

//Задание 2

let c = prompt("Введите число");
c > 0 && c < 10 ? console.log("Верно") : console.log("Неверно");

//Задание 3

let d = prompt("Введите число 1");
let e = prompt("Введите число 2");
d > 100 || e > 100 ? console.log("Верно") : console.log("Неверно");

//Задание 4

let a = '2';
let b = '3';
// Код выше изменять менять нельзя, чтобы решить задачу исправьте код ниже: 
alert(Number(a) + Number(b));

//Задание 5

let monthNumber = Number("Введите номер месяца");
switch (monthNumber) {
    case 1:
        alert("Время года - зима");
        break;
    case 2:
        alert("Время года - зима");
        break;
    case 3:
        alert("Время года - весна");
        break;
    case 4:
        alert("Время года - весна");
        break;
    case 5:
        alert("Время года - весна");
        break;
    case 6:
        alert("Время года - лето");
        break;
    case 7:
        alert("Время года - лето");
        break;
    case 8:
        alert("Время года - лето");
        break;
    case 9:
        alert("Время года - осень");
        break;
    case 10:
        alert("Время года - осень");
        break;
    case 11:
        alert("Время года - осень");
        break;
    case 12:
        alert("Время года - зима");
        break;
    default: ("Введите от 1 до 12");
        break;
}