
let divInvisible = document.getElementById('text');
divInvisible.style.width = '200px';
divInvisible.style.height = '200px';
divInvisible.style.background = 'red';
divInvisible.addEventListener('click', function () {
    divInvisible.style.display = 'none';
})


let form = document.forms.form;
    form.onsubmit = function (e) {
        if (form.inp.value < 18) {
            alert('Цей контент для 18+');
        } else {
            alert('Все ок!');
        }
    }


let f1 = document.forms.f1;
let f2 = document.forms.f2;
let btn = document.getElementById('btn');
btn.onclick = function () {
    console.log(`input1: ${f1.input1.value}, input2: ${f2.input2.value}`);
}


let table = document.forms.table;
table.onsubmit = function (e) {
    e.preventDefault();
    let row = table.row.value;
    let column = table.column.value;
    let text = table.text.value;
    let tbl = document.createElement('table');
    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < column; j++) {
            let td = document.createElement('td');
            td.innerText = text;
            tr.append(td);
        }
        tbl.append(tr);
    }
    document.body.appendChild(tbl);
}