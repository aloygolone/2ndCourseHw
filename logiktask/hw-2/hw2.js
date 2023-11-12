let a = 10;
alert(a);
a = 20;
alert(a);
let firstIPhone = `Год выпуска первого IPhone - 2007`;
alert(firstIPhone);
let creatorJavaScript = `Создатель JavaScript - Брендан Эйх`;
alert(creatorJavaScript);
let x = 10;
let y = 2;
alert(x+y);
alert(x-y);
alert(x*y);
alert(x/y);
let result = 2**5;
alert(result);
let aa = 9;
let b = 2;
alert(aa%b);
let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num - 1;
alert(num);
let age = Number(prompt(`Сколько вам лет?`));
alert(`Вам ${age} лет`);
let user = {
    name1: String('Ванчелло'),
    age1: Number(30),
    isAdmin: Boolean(true)
};
user["city of residence"] = 'vologda';
user.age1 = 25;
delete user["city of residence"];
let info = prompt("Какую информацию хотите узнать о пользователе?", "name1, age1, isAdmin");
console.log(user[info]);
let username = String(prompt("Как Вас зовут?"));
let greeting = `Привет, ${username}!`;
alert(greeting);