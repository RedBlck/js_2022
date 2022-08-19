// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let fnMin = (a, b, c) => {
//     if (a <= b && a <= c) {
//         console.log(a);
//     }else if (b <= c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// };
// fnMin(-1, 2, 1);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let fnMax = (a, b, c) => {
//     if (a >= b && a >= c) {
//         console.log(a);
//     }else if (b >= c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// };
// fnMax(5, 7, -1);


// - створити функцію яка повертає найбільше число з масиву
// let fnArrMax = (array) => {
//     let max;
//     for (const arrayElement of array) {
//         if (arrayElement > max || typeof max === "undefined") {
//             max = arrayElement;
//         }
//     }
//     return max;
// };
// console.log(fnArrMax([1, 2, 3, 4, 5, 6, 7, 8, 9, -1]));


// - створити функцію яка повертає найменьше число з масиву
// let fnArrMin = (array) => {
//     let min;
//     for (const minElement of array) {
//         if (minElement < min || typeof min === "undefined") {
//             min = minElement;
//         }
//     }
//     return min;
// };
// console.log(fnArrMin([1, 2, 3, 4, 5, 6, 7, 8, 9, -1]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let fnArrSum = (array) => {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum;
// };
// console.log(fnArrSum([4, 4, 856, 41, -500]));





// - Дано натуральное число n. Выведите все числа от 1 до n.
// let fnLimit = (n) => {
//     for (let i = 1; i <= n; i++) {
//         document.write(`<p>${i}</p>`);
//     }
// };
// fnLimit(50);




// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let fnLimit = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             document.write(`<p>${i}</p>`);
//         }
//     } else {
//         for (let i = b; i <= a; i++) {
//             document.write(`<p>${i}</p>`);
//         }
//     }
// };
// fnLimit(50, 25);




// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// let fnArrNum = (array, a) => {
//     [array[a], array[a + 1]] = [array[a + 1], array[a]];
//     return array;
// };
// console.log(fnArrNum([1, 2, 3, 4, 5, 6], 3));



// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let fnArrNull = (array) => {
//     let stoped = array.length;
//     for (let i = 0; i < stoped; i++) {
//         if (array[i] === 0) {
//             array.push(0);
//             array.splice(i, 1);
//             stoped--;
//             i--;
//         }
//     }
//     return array;
// };
// console.log(fnArrNull([0, 15, 4, 0, 94, 0, 17]));