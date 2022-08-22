// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// let cutString = (str, n) => {
//     let arr = [];
//     for (let i = 0; i < str.length; i+=n) {
//         arr.push(str.substr(i, n));
//     }
//     return arr
// };
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let str = 'Каждый охотник желает знать';
// let delete_characters = (str, length) => str.substr(0, length);
// document.writeln(delete_characters(str, 7)); // Каждый

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// let insert_dash = (str) => str.toUpperCase().replaceAll(' ', '-');
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let fnUp = (str) => str[0].toUpperCase()+str.slice(1);
// console.log(fnUp('hello okten'));

// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let validName = (str) => {
//     let valid = str
//         .replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__', ' ');
//     return valid;
// };
// console.log(validName(n1));
// console.log(validName(n2));
// console.log(validName(n3));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let arrRandom = () => {
//     let array = [];
//     for (let i = 0; i < 10; i++) {
//         array.push(Math.round(Math.random() * 100));
//     }
//     return array;
// };
// console.log(arrRandom());
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// console.log(arrRandom().sort((a, b)=> a-b));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
// console.log(arrRandom().filter((item)=> item%2===0 && item !==0));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str) => {
//     let arr = str.split(' ').map(value => value[0].toUpperCase() + value.slice(1));
//     let string = arr.join(' ');
//     return string;
// };
// console.log(capitalize('red and black'));;

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
// let validator = (str) => {
//     let a = str.indexOf('@');
//     if (a > 2) {
//         let arr = str.split('@');
//         let krapka = arr[1].indexOf('.');
//         if (krapka <= 1) {
//             return 'mail dont valid';
//         }
//     } else {
//         return 'mail dont valid';
//     }
//     return 'mail valid';
// };
// console.log(validator('some.email@gmail.com'));

// - є масив, відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о";
// let str = "Астрономия это наука о небесных объектах";
// let count = (str, stringsearch) => {
//     let lenght = str.split(`${stringsearch}`).length -1;
//     return lenght;
// };
//     document.writeln(count(str, symb)); // 5

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let cutString = (str, n) => {
//     let resolt = str.split(' ').slice(0, n).join(' ');
//     return resolt;
// };


// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        name: 'Harry Potter',
        pages: 250,
        author: 'Rouling',
        genre: ['Higt fantasy', 'Adventure']
    },
    {
        name: 'The Lord of the Rings',
        pages: 800,
        author: 'Tolkien',
        genre: ['Higt fantasy', 'Adventure']
    },
    {
        name: 'Ugly Love',
        pages: 180,
        author: 'Hoover',
        genre: 'romance'
    },
    {
        name: 'A Song of Ice and Fire',
        pages: 2000,
        author: 'Martin',
        genre: 'Epic fantasy'
    },
    {
        name: 'The Witcher',
        pages: 600,
        author: ['Andrzej Sapkowski', 'Leonardo'],
        genre: 'fantasy'
    }
];

// -знайти наібльшу книжку.
// let pages = books.map(value => value.pages);
// console.log(Math.max(...pages));

// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню




