// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
// class User {
//     constructor(id, name, username, email,addressStreet, addressSuite, addressCity, addressZipcode,
//                 addressGeoLat, addressGeoLng,phone, website, companyName, companyCatchPhrase, companyBs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {
//             street: addressStreet,
//             suite: addressSuite,
//             city: addressCity,
//             zipcode: addressZipcode,
//             geo:{
//                 lat: addressGeoLat,
//                 lng: addressGeoLng,
//
//             }
//         }
//         this.phone = phone;
//         this.website = website;
//         this.company = {
//             name: companyName,
//             catchPhrase: companyCatchPhrase,
//             bs: companyBs
//         }
//     }
//
// }
//
// console.log(new User(1, 'vova', 'pentsak', 'red@gmail.com', 'ostrivska', 147,'Schyrets',81160, 325.12,125.4,063333333,'wersite','redblack','hzschoce',228));


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
function Tags(nameTag, actionTag,attrb) {
    this.nameTag = nameTag;
    this.actionTag = actionTag;
    this.attrb = attrb;
}

let array = [
    new Tags('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок...', [{
        name: 'href',
        action: 'Задает адрес документа, на который следует перейти.'
    },
        {
            name: 'target',
            action: 'Имя окна или фрейма, куда браузер будет загружать документ.'
        }]),
    new Tags('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента...', [{
        name: 'align',
        action: 'Задает выравнивание содержимого тега <div>.'
    },
        {
            name: 'title',
            action: 'Добавляет всплывающую подсказку к содержимому. '
        }]),
    new Tags('h1', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок...', [{
        name: 'href',
        action: 'Задает адрес документа, на который следует перейти.'
    },
        {
            name: 'target',
            action: 'Имя окна или фрейма, куда браузер будет загружать документ.'
        }]),
    new Tags('span', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок...', [{
        name: 'href',
        action: 'Задает адрес документа, на который следует перейти.'
    },
        {
            name: 'target',
            action: 'Имя окна или фрейма, куда браузер будет загружать документ.'
        }]),
    new Tags('input', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок...', [{
        name: 'href',
        action: 'Задает адрес документа, на который следует перейти.'
    },
        {
            name: 'target',
            action: 'Имя окна или фрейма, куда браузер будет загружать документ.'
        }]),
    new Tags('form', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок...', [{
        name: 'href',
        action: 'Задает адрес документа, на который следует перейти.'
    },
        {
            name: 'target',
            action: 'Имя окна или фрейма, куда браузер будет загружать документ.'
        }]),
    new Tags('option', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок...', [{
        name: 'href',
        action: 'Задает адрес документа, на который следует перейти.'
    },
        {
            name: 'target',
            action: 'Имя окна или фрейма, куда браузер будет загружать документ.'
        }]),
    new Tags('select', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок...', [{
        name: 'href',
        action: 'Задает адрес документа, на который следует перейти.'
    },
        {
            name: 'target',
            action: 'Имя окна или фрейма, куда браузер будет загружать документ.'
        }])

];
console.log(array);