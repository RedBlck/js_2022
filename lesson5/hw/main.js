// Все стірлочними!!!!!!!!!
//     - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [12, 48, 874, 15, 46, 12, 14, 7];
// let arifmetic = (arrey) => {
//     let suma = 0;
//     for (let i = 0; i < arrey.length; i++) {
//         suma += arrey[i];
//         return suma / arrey.length;
//     }
// };
// console.log(arifmetic(arr));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let fnNum = (...args) => {
//     let min;
//     let max;
//     for (const argument of args) {
//         if (argument < min || typeof min === "undefined") {
//             min = argument;
//         }
//         if (argument > max || typeof max === "undefined") {
//             max = argument;
//         }
//     }
//     document.write(max);
//     return min;
// };
// console.log(fnNum(1, 4, 8, 100));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let arrRandomNum = () => {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random()*100));
//     }
//     return arr;
// };
// console.log(arrRandomNum());


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let arrRandomLimit = (limit) => {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random()*limit))
//     }
//     return arr;
// };
// console.log(arrRandomLimit(50));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arrRevers = (array) => {
//     let newArr = [];
//     for (let i = array.length-1; i >= 0; i--) {
//         newArr.push(array[i]);
//     }
//     return newArr;
// };
// console.log(arrRevers([84, 65, 12, 1, -15, 54]));


//     Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let areaRectangle = (a, b) => a * b;
// console.log(areaRectangle(5, 5));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let areaCircle = (r) => 3.14 * (r ** 2);
// console.log(areaCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let areaCylinder = (h, r) => 2 * Math.PI * r * h;
// console.log(areaCylinder(2, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let fnArr = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         console.log(arrayElement);
//     }
// };
// fnArr([15, 7, 1, 84, 64, 4]);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let fnParagraf = (text) => document.write(`<p>${text}</p>`);
// fnParagraf('redblck');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let fnUlLi = (text) => {
//     document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
// };
// fnUlLi('okten');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let fnUlLiLimit = (text, limit) => {
//     document.write('<ul>');
//     for (let i = 0; i < limit; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write('</ul>');
// };
// fnUlLiLimit('oktenWeb', 3);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let fnArr = (array) => {
//     document.write('<ul>');
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
//     document.write('</ul>');
// };
// fnArr([54, 78, true, 'ter', 2, false]);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let fnArr = (array) => {
//     for (const arrayElement of array) {
//         document.write('<div>');
//         for (const arrayElementKey in arrayElement) {
//             document.write(`<span>${arrayElement[arrayElementKey]}</span> `);
//         }
//         document.write('</div>');
//     }
// };
// fnArr([
//     {id: 98589, name: 'Roman', age: 20},
//     {id: 65243, name: 'Oleg', age: 25},
//     {id: 68524, name: 'Jon', age: 34}
// ]);


// - створити функцію яка повертає найменьше число з масиву
// let arrSmallNum = (array) => {
//     let min;
//     for (const arrayElement of array) {
//         if (arrayElement < min || typeof min === "undefined") {
//             min = arrayElement;
//         }
//     }
//     return min;
// };
// console.log(arrSmallNum([15, 4, 12, 99, -12, 0]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arrSuma = (array) => {
//     let suma = 0;
//     for (const arrayElement of array) {
//         suma += arrayElement;
//     }
//     return suma
// };
// console.log(arrSuma([15, 1, 51, 48, -20]));


// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
// let arrObj = (array) => {
//     [array[0], array[1]] = [array[1], array[0]];
//     return array;
// };
// console.log(arrObj([
//     {id: 98589, name: 'Roman', age: 20},
//     {id: 68524, name: 'Jon', age: 34}
// ]));