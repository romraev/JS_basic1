// ДЗ_4

// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

function strings(num = 11) {
    console.log("0 - это ноль")
    for (let i = 1; i < num; i++){
        console.log(`${i++} - это нечетное число`)
        console.log(`${i} - это четное число`)
    }
}
strings()

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7]
const new_arr = arr.slice(0, 3).concat(arr.slice(-2))
console.log(arr)
console.log(new_arr)

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function randArr(size = 5, max = 9) {
    const arr = []
    for (let i = 0; i < size; i++) {
        arr [i] = Math.floor(Math.random()*(max+1));
    }
    console.log(arr)
    console.log(`Сумма массива равна: ${arr.reduce((a, b) => a+b)}`)
    console.log(`Минимальное число: ${Math.min(...arr)}`)
    console.log(`${arr.includes(3) ? "Число 3 есть!" : "Числа 3 нет!"}`)
}
randArr()


// Задание 4
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов

function gorka(max = 20) {
    let str = ''
    console.log(str)
    for (let i = 0; i < max-1; i++) {
        console.log(str += 'x')
    }
}
gorka()


// ДЗ_3
// // Задание 1. Задание 1. Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
// function getCube(num) {
//     return (+num) ** 3
// }
// console.log(getCube(2) + getCube(3))

// // Задание 2. Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно. Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
// const input1 = document.querySelector("#num1")
// const answer1 = document.querySelector(".answer1")
// function getSalary(income) {
//     return Number.isNaN(income) ? `Неверное значение`:`Размер заработной платы за вычетом налогов равен: ${income*0.87} у.е.`
// }

// input1.addEventListener('input', (event) => {
//     let income = +event.target.value
//     answer1.innerHTML = getSalary(income)
// })

// // Задание 3. Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел.
// function getMax() {
//     let max = prompt("Введите числа через пробел").split(" ").reduce((a,b) => Math.max(+a, +b))
//     return Number.isNaN(max) ? "Неверный ввод":`Максимальное число: ${max}`
// }
// alert(getMax())

// // Задание 4. Необходимо от пользователя получить число. Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
// function calc(a, b, operation) {
//     switch(operation) {
//         case '+': return a+b
//         case '-': return Math.abs(a-b)
//         case '*': return a*b
//         case '/': return a/b
//     }
// }
// console.log(calc(2,5,'+'))
// console.log(calc(2,5,'-'))
// console.log(calc(2,5,'*'))
// console.log(calc(2,5,'/'))