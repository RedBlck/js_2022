let user = JSON.parse(localStorage.getItem('user'));
let conteiner = document.createElement('div');
conteiner.classList.add('conteiner');
let btn = document.createElement('button');
btn.classList.add('btn');
btn.innerText = 'post of current user';
let conteinerBoxs = document.createElement('div');
conteinerBoxs.classList.add('conteinerBoxs');
for (const userKey in user) {
    let box = document.createElement('div');
    box.classList.add('box');
    if (userKey === 'address') {
        box.innerHTML = `<strong>address</strong>`;
        for (adressKey in user.address) {
            let adressDiv = document.createElement('div');
            adressDiv.classList.add('paddingBot');
            if (adressKey === 'geo') {
                adressDiv.innerHTML = `<strong>geo:</strong> ${user.address.geo.lat} ${user.address.geo.lng}`;
            } else {
                adressDiv.innerHTML = `<strong>${adressKey}:</strong> ${user.address[`${adressKey}`]}`;
            }
            box.append(adressDiv);
        }
    } else if (userKey === 'company') {
        box.innerHTML = `<strong>company</strong>`;
        for (companyKey in user.company) {
            let companyDiv = document.createElement('div');
            companyDiv.classList.add('paddingBot');
            companyDiv.innerHTML = `<strong>${companyKey}:</strong> ${user.company[`${companyKey}`]}`;
            box.append(companyDiv);
        }
    } else {
        box.innerHTML = `<strong>${userKey}:</strong> ${user[`${userKey}`]}`;
    }
    conteinerBoxs.append(box);
}
conteiner.append(conteinerBoxs,btn);
document.body.append(conteiner);

let postsConteiner = document.createElement('div');
postsConteiner.classList.add('postsConteiner', 'postsConteinerNone');
fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(value => value.json())
    .then(posts => {
        for (const post of posts) {
            let postBox = document.createElement('div');
            postBox.classList.add('postBox');
            postBox.innerHTML = `<h4>${post.title}</h4>`
            let postBtn = document.createElement('button');
            postBtn.classList.add('postBtn');
            postBtn.innerText = 'post';
            postBtn.onclick = function () {
                localStorage.setItem('post', JSON.stringify(post));
                location.href = 'post-details.html';
            };
            postBox.append(postBtn);
            postsConteiner.append(postBox);
        }
    });
btn.onclick = function () {
    postsConteiner.classList.toggle('postsConteinerNone');
};

conteiner.append(postsConteiner);