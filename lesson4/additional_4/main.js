// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNum(a, b, c) {
//     let min = 0;
//     if (a <= b && a <= c) {
//         min = a;
//     } else if (b <= a && b <= c) {
//         min = b;
//     } else {
//         min = c;
//     }
//     return min;
// }
// console.log(minNum(15, 12, 0));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maxNum(a, b, c) {
//     if (a >= b && a >= c) {
//         console.log(a)
//     } else if (b >= a && b >= c) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
// maxNum(5, 0, -200);

// - створити функцію яка повертає найбільше число з масиву
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.round(Math.random() * 100));
// }
// function maxNum(arrey) {
//     let max;
//     for (const arreyElement of arrey) {
//         if (arreyElement > max || typeof max === "undefined") {
//             max = arreyElement;
//         }
//     }
//     return max;
// }
// console.log(maxNum(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.round(Math.random() * 100));
// }
// function arifmetic(arrey) {
//     let suma = 0;
//     for (const arreyElement of arrey) {
//         suma = suma + arreyElement;
//     }
//     return suma / arrey.length;
// }
// console.log(arifmetic(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minAndMax() {
//     let max;
//     let min;
//     for (const argument of arguments) {
//         if (argument > max || typeof max === "undefined") {
//             max = argument;
//         }
//         if (argument < min || typeof min === "undefined") {
//             min = argument;
//         }
//     }
//     document.write(max);
//     return min;
// }
// console.log(minAndMax(2, 54, 87, 15, 46, 64, 84, 151, 0));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function randomArr() {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }
// console.log(randomArr());

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function randomLimit(limit) {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random()*limit));
//     }
//     return arr;
// }
// console.log(randomLimit(8));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function arrBack(arrey) {
//     let newArr = [];
//     for (let i = arrey.length - 1; i >= 0; i--) {
//         newArr.push(arrey[i]);
//     }
//     return newArr;
// }
// console.log(arrBack([1, 2, 3, 4, 5, 6, 7, 8]));


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function test() {
//     let text = '';
//     if (arguments.length === 1) {
//         text = arguments[0];
//     } else {
//         for (const argument of arguments) {
//             text = `${text} ${argument}`;
//         }
//     }
//     return text;
// }
//
// console.log(test(8,12,451,true));


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrTwo = [21, 54, 1, 524, 54, 21, 15, 3, 15, 48];
//
// function arreysSuma(arr1, arr2) {
//     let newArr = [];
//     if (arr1.length >= arr2.length) {
//         for (let i = 0; i < arr1.length; i++) {
//             const arr1Element = arr1[i];
//             if (arr1[i] && arr2[i]) {
//                 newArr[i] = arr1[i] + arr2[i];
//             } else if (arr1[i]) {
//                 newArr[i] = arr1[i];
//             } else {
//                 newArr[i] = arr2[i];
//             }
//         }
//     } else {
//         for (let i = 0; i < arr2.length; i++) {
//             const arr1Element = arr1[i];
//             if (arr1[i] && arr2[i]) {
//                 newArr[i] = arr1[i] + arr2[i];
//             } else if (arr1[i]) {
//                 newArr[i] = arr1[i];
//             } else {
//                 newArr[i] = arr2[i];
//             }
//         }
//     }
//     return newArr;
// }
// console.log(arreysSuma(arrOne,arrTwo))

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function arrObj(arrey) {
//     let newArrKeys = [];
//     for (const arreyElement of arrey) {
//         for (const arreyElementKey in arreyElement) {
//             newArrKeys.push(arreyElementKey);
//         }
//     }
//     return newArrKeys;
// }
// console.log(arrObj(arr));


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// function arrObj(arrey) {
//     let newArrKeys = [];
//     for (const arreyElement of arrey) {
//         for (const arreyElementKey in arreyElement) {
//             newArrKeys.push(arreyElement[arreyElementKey])
//         }
//     }
//     return newArrKeys;
// }
// console.log(arrObj(arr));