// Задание 1. Создать переменные num1, num2 которые пользователь вводит с клавиатуры. Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
[num1, num2] = prompt("Введите num1 и num2 через пробел").split(" ");
if (num1 && num2) {
  alert(`
    num1 ${+num1 <= 1 ? "меньше либо равно 1" : "больше 1"}
    num2 ${+num2 >= 3 ? "больше либо равно 3" : "меньше 3"}
`);
}else {
    alert("Ошибка ввода!")
}
// Задание 2. Перепишите код к тернарному оператору
let test = true;
console.log(test === true ? '+++':'---');
// Задание 3. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
const input1 = document.querySelector("#num1")
const answer1 = document.querySelector(".answer1")

input1.addEventListener('input', (event) => {
    let day = event.target.value
    answer1.innerHTML = `Это день ${+day < 30 ? Math.floor(+day/10 + 1) : 3} декады месяца`
})
// Задание 4. Необходимо от пользователя получить число. Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
const input2 = document.querySelector("#num2")
const answer2 = document.querySelector(".answer2")

input2.addEventListener('input', (event) => {
    let num = +event.target.value
    answer2.innerHTML = `В числе ${num} количество сотен: ${Math.floor(num/100)}, десятков: ${Math.floor((num%100)/10)}, единиц: ${Math.floor(num%10)}`
})