fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let conteiner = document.createElement('div');
        conteiner.id = 'conteiner';
        document.body.append(conteiner);
        for (const user of users) {
            let box = document.createElement('div');
            box.classList.add('box');
            box.innerHTML = `<h4>ID: ${user.id}</h4><h2>Name: ${user.name}</h2>`
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