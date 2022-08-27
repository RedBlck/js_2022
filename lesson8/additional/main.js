// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
let array = [];
let allElements = document.querySelectorAll('*');
let rec = (i, elements, limit) => {
    if (elements[i].classList.value !== '') {
        for (const element of elements[i].classList) {
            if (array.includes(element) !== true) {
                array.push(element);
            }
        }
    }
    i++;
    if (i >= limit) {
        return;
    }
    rec(i, elements, limit);
};
rec(0, allElements, allElements.length);
console.log(array);
