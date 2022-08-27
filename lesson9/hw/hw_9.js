// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
// let divElement = document.createElement('div');
// divElement.innerText = 'RedBlack';
// divElement.classList.add('wrap', 'collapse', 'alpha', 'beta');
// divElement.style.background = 'black';
// divElement.style.color = 'red';
// divElement.style.fontSize = '25px';
// document.body.appendChild(divElement);
// let divClone = divElement.cloneNode(true);
// document.body.appendChild(divClone);

//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
// let array = ['Main', 'Products', 'About us', 'Contacts'];
// let menu = document.getElementsByClassName('menu')[0];
// for (const string of array) {
//     let htmlliElement = document.createElement('li');
//     htmlliElement.innerText = string;
//     menu.appendChild(htmlliElement);
// }

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const course of coursesAndDurationArray) {
//     let p = document.createElement('p');
//     p.innerText = `title: ${course.title} - month: ${course.monthDuration}`;
//     document.body.append(p);
// }

// - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (const course of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//     div.innerHTML = `<h1 class='heading'>title:${course.title}</h1><p class='description'>monthDuration:${course.monthDuration}</p>`;
//     document.body.appendChild(div);
// }