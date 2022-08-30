fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let conteiner = document.createElement('div');
        conteiner.id = 'conteiner';
        document.body.append(conteiner);
        for (const user of users) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.innerHTML = `<div class="title"><h2>ID: ${user.id}</h2><h2>Name: ${user.name}</h2></div>`
            let btn = document.createElement('button');
            btn.classList.add('btn');
            btn.innerText = 'user details';
            btn.onclick = function () {
                localStorage.setItem('user', JSON.stringify(user));
                location.href = 'user-details.html';
            }

            box.append(btn);
            conteiner.append(box);
        }
    });