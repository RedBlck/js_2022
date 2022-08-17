// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle(a, b) {
//     let res = a * b;
//     return res;
// }
// console.log(rectangle(8, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function sCircle(r) {
//     const p = 3.14;
//     let resolt = p * (r ** 2);
//     return resolt;
// }
// console.log(sCircle(16));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function sCylinder(h, r) {
//     const p = 3.14;
//     let resolt = 2 * p * r * h;
//     return resolt;
// }
// console.log(sCylinder(15, 8));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [10, true, 'red', 95, false, 'black'];
// function arrIter(array) {
//     for (const argument of array) {
//         console.log(argument)
//     }
// }
// arrIter(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraf(text) {
//     document.write(`<p>${text}</p>`);
// }
// paragraf('red asd grt');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function ulThreeLi(text) {
//     document.write(`<ul>
//         <li>${text}</li>
//         <li>${text}</li>
//         <li>${text}</li>
//     </ul>`);
// }
// ulThreeLi('redblack');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ulLi(text, n) {
//     document.write('<ul>');
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write('</ul>');
// }
// ulLi('red', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [10, true, 'red', 95, false, 'black'];
// function arrUlLi(arr) {
//     document.write('<ul>')
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write('</ul>')
// }
// arrUlLi(array);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [
//     {id: 98589, name: 'Roman', age: 20},
//     {id: 65243, name: 'Oleg', age: 25},
//     {id: 68524, name: 'Jon', age: 34}
// ];
// function arrObjects(arrey) {
//     for (const arreyElement of arrey) {
//         document.write(`<div>id - ${arreyElement.id}, name - ${arreyElement.name}, age - ${arreyElement.age}</div>`);
//     }
// }
// arrObjects(arr);

// - створити функцію яка повертає найменьше число з масиву
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.round(Math.random() * 100));
// }
// function smallNum(array) {
//     let num;
//     for (const arrayElement of array) {
//         if (arrayElement < num || typeof num === "undefined") {
//             num = arrayElement;
//         }
//     }
//     console.log(num);
// }
// smallNum(arr);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.round(Math.random() * 100));
// }
// function arrSum(arrey) {
//     let suma = 0;
//     for (const arreyElement of arrey) {
//         suma = suma + arreyElement;
//     }
//     return suma;
// }
//
// console.log(arrSum(arr));
