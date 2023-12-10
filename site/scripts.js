// Времена года

const season = () => {

    let userNumber = Number(prompt('Введите номер месяца'));

    let result = () => {
        if (userNumber >= 1 && userNumber <= 12) {
            if (userNumber === 1 || userNumber === 2 || userNumber === 12) {
                return alert(`Это зима`)
            } else if (userNumber === 3 || userNumber === 4 || userNumber === 5) {
                return alert(`Это весна`)
            } else if (userNumber === 6 || userNumber === 7 || userNumber === 8) {
                return alert(`Это лето`)
            } else {
                return alert(`Это осень`)
            }
        }
    };

    if (userNumber < 1 || userNumber > 12 || isNaN(userNumber)) {

        do {
            userNumber = Number(prompt('Введите номер месяца (нужно ввести от 1 до 12'))
        } while (userNumber < 1 || userNumber > 12 || isNaN(userNumber));

        result();

    } else {

        result();

    }

}

// Запомни слова

function rememberTheWords() {

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    const wordsArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    shuffle(wordsArray);
    alert(wordsArray.join('\n'));

    const userFirstUnswer = prompt('Что было на первой строчке?');
    const userSecondUnswer = prompt('Что было на последней строчке?');

    let a = userFirstUnswer.toLowerCase();
    let b = userSecondUnswer.toLowerCase();
    let c = wordsArray.shift().toLowerCase();
    let d = wordsArray.at(-1).toLowerCase();

    if (a == c && b == d) {
        alert(`Молодец, красавчег! Внатуре четко!`)
    } else if (a != c && b != d) {
        alert(`Пока не угадал, попробуй еще раз!`)
    } else {
        alert(`Вы были близки к победе!`)
    }
}