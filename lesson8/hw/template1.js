// - Напишіть код,  котрий :

// -- отримує текст з параграфа з id "content"
let contentId = document.getElementById('content');
console.log(contentId.innerText);

// -- отримує текст з блоку з id "rules"
let rulesId = document.getElementById('rules');
console.log(rulesId.innerText);

// -- замініть текст параграфа з id 'content' на будь-який інший
contentId.innerText = 'new text';
console.log(contentId.innerText);

// -- замініть текст параграфа з id 'rules' на будь-який інший
rulesId.innerText = 'new text';
console.log(rulesId.innerText);

let children = document.body.children;
for (const child of children) {
    child.style.background = 'red';
    child.style.color = 'blue';
}
// ------- або ----------
// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
// let allElements = document.querySelectorAll('*');
// for (const allElement of allElements) {
//     allElement.style.background = 'red';
//     allElement.style.color = 'blue';
// }


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rulesId.classList);

// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcRules = document.getElementsByClassName('fc_rules');
for (const fcRule of fcRules) {
    fcRule.style.color = 'black';
}