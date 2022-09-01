// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// <form name="fm1">
//     <input type="text" name="fm1_name">
//     <input type="number" name="fm1_age">
//     <button>go</button>
// </form>
let fm1 = document.forms.fm1;
fm1.onsubmit = function (e) {
    e.preventDefault();
    let user = {};
    user.name = `${fm1.fm1_name.value}`;
    user.age = `${fm1.fm1_age.value}`;
    localStorage.setItem('user', JSON.stringify(user));
};



//
//     -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
//     <form name="fm2">
//         <input type="text" name="model">
//             <input type="text" name="type">
//                 <input type="text" name="volume">
//                     <button>go</button>
//     </form>
let fm2 = document.forms.fm2;
let array = [];
fm2.onsubmit = function (e) {
    e.preventDefault();
    let auto = {};
    auto.model = `${fm2.model.value}`;
    auto.type = `${fm2.type.value}`;
    auto.volume = `${fm2.volume.value}`;
    array.push(auto);
    localStorage.setItem('cars', JSON.stringify(array));
}