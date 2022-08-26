// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let mainHeader = document.getElementById('main_header');
mainHeader.className = 'group2';

// b) робить шириниу елементу ul 400px
let uls = document.getElementsByTagName('ul');
for (const ul of uls) {
    ul.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2');
for (const listElement2Element of listElement2) {
    console.log(listElement2Element.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
let liElements = document.getElementsByTagName('li');
for (const liElement of liElements) {
    liElement.style.background = 'blue';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let aElements = document.getElementsByTagName('a');
for (const aElement of aElements) {
    aElement.className = 'anchar';
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let aaElements = document.getElementsByTagName('a');
for (const aaElement of aaElements) {
    if (aaElement.innerText === 'link3') {
        aaElement.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let aaaElements = document.getElementsByTagName('a');
for (const aaaElement of aaaElements) {
    aaaElement.className = `element_${aaaElement.innerText}`;
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName('sub-header');
let newColorBg = prompt('color background');
for (const subHeaderElement of subHeader) {
    subHeaderElement.style.background = `${newColorBg}`;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let newColorText = prompt('color text');
for (const subHeaderElement of subHeader) {
    subHeaderElement.style.color = `${newColorText}`;
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content1 = document.getElementsByClassName('content_1');
let text = prompt('text');
for (const content1Element of content1) {
    content1Element.innerText = `${text}`;
}

// l) отримати елементи p та змінити їм padding на 20px
let pElements = document.getElementsByTagName('p');
for (const pElement of pElements) {
    pElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2');
for (const text2Element of text2) {
    text2Element.innerText = 'June-2022';
}