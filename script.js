console.log("Текст из script.js")
const temperature = Math.floor(Math.random() * 30);
const weatherList = ['Солнечно', 'Пасмурно', 'Дождливо', 'Ветренно', 'Снег'];
const weather = weatherList[Math.round(Math.random() * 4)];
console.log(
    `Погода в Санкт-Петербурге:
        Температура воздуха: ${temperature}C (${temperature*9/5 + 32}F)
        ${weather}

    ${temperature < 18 ? 'Одевайтесь теплее!' : 'Одевайтесь легко'}
    ${weather === 'Дождливо' ? 'Не забудьте зонт!' : 'Хорошего дня!'}
    `
)
const firstName = 'Роман'
const age = 28
const favNum = 6

let admin = firstName
console.log(
    `Меня зовут ${firstName}, мне ${28} лет, и мое любимое число — ${favNum}.`
)