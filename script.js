// Задание 1. Задание 1. Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
function getCube(num) {
    return (+num) ** 3
}
console.log(getCube(2) + getCube(3))

// Задание 2. Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно. Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"
const input1 = document.querySelector("#num1")
const answer1 = document.querySelector(".answer1")
function getSalary(income) {
    return Number.isNaN(income) ? `Неверное значение`:`Размер заработной платы за вычетом налогов равен: ${income*0.87} у.е.`
}

input1.addEventListener('input', (event) => {
    let income = +event.target.value
    answer1.innerHTML = getSalary(income)
})

// Задание 3. Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел.
function getMax() {
    let max = prompt("Введите числа через пробел").split(" ").reduce((a,b) => Math.max(+a, +b))
    return Number.isNaN(max) ? "Неверный ввод":`Максимальное число: ${max}`
}
alert(getMax())

// Задание 4. Необходимо от пользователя получить число. Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
function calc(a, b, operation) {
    switch(operation) {
        case '+': return a+b
        case '-': return Math.abs(a-b)
        case '*': return a*b
        case '/': return a/b
    }
}
console.log(calc(2,5,'+'))
console.log(calc(2,5,'-'))
console.log(calc(2,5,'*'))
console.log(calc(2,5,'/'))